import React from 'react';
import { notification, Spin } from 'antd';
import { fetchToken, fetchView, getQueryParams } from './fetch';
import { LoginProviderProps, LoginStates } from './interface';

class LoginProvider extends React.Component<LoginProviderProps, LoginStates> {
  static defaultProps: {
    loading: React.ReactNode;
    config: { view: string; logout: string; login: string; validate: string };
    onError: (msg: string, desc: string) => void;
  };

  static logout: () => void;

  constructor(props: LoginProviderProps) {
    super(props);
    this.state = {
      loading: true,
    };
    LoginProvider.logout = this.action.bind(this, 'logout');
  }

  componentDidMount() {
    if (this.props.open === false) {
      return;
    }

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

  getUserInfo() {
    const { ticket } = getQueryParams();
    if (!ticket) {
      // 如果当前路由没有出现ticket参数 则直接跳转至SSO登录
      this.action('login');
      return;
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
          window.location.href = window.location.href.substring(
            0,
            window.location.href.indexOf('?'),
          );
          return;
        }
        this.fetchError('登录失败', 'SSO的view参数校验异常，即将返回重新登录');
      })
      .catch((err) => {
        this.fetchError('登录失败', err.message);
      });
  }

  validateToken(token: string) {
    const { domain, config } = this.props;
    fetchToken(domain, config.validate, token)
      .then((res) => {
        const { code } = res;
        if (code === 0) {
          this.setState({
            loading: false,
          });
          return;
        }
        this.fetchError('校验token失败', 'token参数校验异常，即将退出登录');
      })
      .catch((err) => {
        this.fetchError('校验token失败', err.message);
      });
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

  fetchError(msg: string, desc: string) {
    const { onError } = this.props;

    if (typeof onError === 'function') {
      onError(msg, desc);
    }
  }

  render() {
    const { loading: loadingComponent, children, open } = this.props;
    const { loading } = this.state;

    if (open === false) {
      return children;
    }

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
    <Spin spinning />
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
  onError: (msg: string, desc: string) => {
    notification.error({
      message: msg,
      description: desc,
      duration: 1,
      onClose: () => {
        LoginProvider.logout();
      },
    });
  },
};

export default LoginProvider;
