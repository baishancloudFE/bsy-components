import React from 'react';
import { Spin } from 'antd';
import { fetchToken, fetchView, getQueryParams } from './fetch';

interface LoginConfig {
  view: string;
  login: string;
  logout: string;
  validate: string;
}

export interface LoginProviderProps {
  open?: boolean;
  domain: string;
  config: LoginConfig;
  loading?: React.ReactNode;
  children?: React.ReactNode;
  clearFields?: string;
}

interface LoginStates {
  loading: boolean;
}

class LoginProvider extends React.Component<LoginProviderProps, LoginStates> {
  static logout: () => void;
  static defaultProps: {
    loading: React.ReactNode;
    config: { view: string; logout: string; login: string; validate: string };
  };

  constructor(props: LoginProviderProps) {
    super(props);
    this.state = {
      loading: true,
    };
    LoginProvider.logout = this.action.bind(this, 'logout');
  }

  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token && !localStorage.getItem('current_user')) {
      this.action('logout');
    } else if (token) {
      this.setState({ loading: true });
      this.validateToken(token);
    } else {
      this.getUserInfo();
    }
  }

  action(type: string) {
    const { domain, config, clearFields } = this.props;

    if (Array.isArray(clearFields)) {
      clearFields.forEach((key) => {
        localStorage.removeItem(key);
      });
    } else {
      localStorage.clear();
    }

    if (type === 'logout') {
      window.location.assign(`${domain}${config.logout}`);
    } else {
      window.location.assign(`${domain}${config.login}`);
    }
  }

  getUserInfo() {
    const { ticket } = getQueryParams();
    if (!ticket) {
      // 如果当前路由没有出现ticket参数 则直接跳转至SSO登录
      return this.action('login');
    }
    const { domain, config } = this.props;

    fetchView(domain, config.view, ticket)
      .then((res) => {
        const { code, data } = res;
        if (code === 0) {
          localStorage.setItem('token', data.jwtToken);
          localStorage.setItem('menu', JSON.stringify(data.menu));

          const userInfo: any = { cname: data.cname, ename: data.name };
          if (data.uid != null) {
            userInfo.uid = data.uid;
          }
          localStorage.setItem('current_user', JSON.stringify(userInfo));

          // 清除url多余参数
          return (window.location.href = window.location.href.substring(
            0,
            window.location.href.indexOf('?'),
          ));
        }
        console.error('ticket校验异常，即将退出登录');
        return this.action('logout');
      })
      .catch((err) => {
        console.error(`${config.view}接口响应异常，即将退出登录：`, err);
        return this.action('logout');
      });
  }

  validateToken(token: string) {
    const { domain, config } = this.props;
    fetchToken(domain, config.validate, token)
      .then((res) => {
        const { code } = res;
        if (code === 0) {
          return this.setState({
            loading: false,
          });
        }
        console.error('token校验异常，即将退出登录');
        this.action('logout');
      })
      .catch((err) => {
        console.error(`${config.validate}接口响应异常：`, err);
        this.action('logout');
      });
  }

  render() {
    const { loading: loadingComponent, children } = this.props;
    const { loading } = this.state;

    if (loading) {
      return loadingComponent;
    }
    return children;
  }
}

const DefaultLoading = () => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Spin spinning={true} />
  </div>
);

LoginProvider.defaultProps = {
  loading: <DefaultLoading />,
  config: {
    view: '/account/user/view',
    login: '/account/user/login',
    logout: '/account/user/logout',
    validate: '/account/token/validate',
  },
};

export default LoginProvider;
