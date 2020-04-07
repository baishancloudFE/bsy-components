import React, { useEffect, useState } from 'react';
import { RouterParams, ViewResponse, WithLoginProps } from './type';

const WithLogin: React.FC<WithLoginProps> = ({
  open,
  config,
  domain,
  children,
}) => {
  if (!domain) {
    throw new Error('WithLogin组件必须配置domain参数');
  }

  if (!open) {
    return <div>{children}</div>;
  }

  const [loading, setLoading] = useState<boolean>(true);

  const action = (type: string) => {
    // 清除所有缓存;
    localStorage.clear();
    sessionStorage.clear();

    if (type === 'logout') {
      window.location.assign(`${domain}${config.logout}`);
    } else {
      window.location.assign(`${domain}${config.login}`);
    }
  };

  const fetchView = () => {
    const { ticket } = getQueryParams();
    if (!ticket) {
      // 如果当前路由没有出现ticket参数 则直接跳转至SSO登录
      console.log('没有找到ticket参数，即将跳转至登录页面');
      return action('login');
    }

    fetch(`${domain}${config.view}?ticket=${ticket}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(({ code, data }: ViewResponse) => {
        if (code === 0) {
          localStorage.setItem('token', data.jwtToken);
          localStorage.setItem('menu', JSON.stringify(data.menu));
          localStorage.setItem('user_cname', data.cname);
          localStorage.setItem('user_ename', data.name);
          return (window.location.href = window.location.origin);
        }
        console.error('token校验异常，即将退出登录');
        return action('logout');
      })
      .catch(err => {
        console.error(`${config.view}接口响应异常：`, err);
        return action('logout');
      });
  };

  const validateToken = (token: string) => {
    fetch(`${domain}${config.validate}`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    })
      .then(res => res.json())
      .then(({ code }) => {
        if (code === 0) {
          console.log('token校验通过');
          return setLoading(false);
        }
        console.error('token校验异常，即将退出登录');
        return action('logout');
      })
      .catch(err => {
        console.error(`${config.validate}接口响应异常：`, err);
        return action('logout');
      });
  };

  /**
   * 初始化执行
   * 有token时校验该token合法性
   * 没有token时直接进行重新登录操作
   */
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      return validateToken(token);
    }
    return fetchView();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return <div>{children}</div>;
};

function getQueryParams(): RouterParams {
  const { href } = window.location;
  if (href.indexOf('?') < 0) {
    return {};
  }
  const query = href.substr(href.indexOf('?') + 1);
  const params: RouterParams = {};
  const search = query.split('&');
  search.forEach(item => {
    let key = item.split('=');
    params[key[0]] = key[1];
  });
  return params;
}

WithLogin.defaultProps = {
  open: true,
  config: {
    view: '/account/user/view',
    login: '/account/user/login',
    logout: '/account/user/logout',
    validate: '/account/token/validate',
  },
};

export default WithLogin;
