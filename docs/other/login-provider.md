---
group:
  title: 其他组件
---

# LoginProvider

用于内部接入单点 SSO 登录

### Examples

```js
import React from 'react';
import { LoginProvider } from 'bsy-components';

const Demo = ({ children }) => {
  // do something...
  return (
    <LoginProvider open={false} domain="https://www.baishancloud.com">
      {children}
    </LoginProvider>
  );
};

export default Demo;
```

### 参数

| 参数         | 说明                     | 类型            | 默认值        |
| :----------- | :----------------------- | :-------------- | :------------ |
| open?        | 是否开启 SSO 登录        | boolean         | true          |
| domain!      | SSO 平台配置的主域名     | string          | -             |
| config       | SSO 对应的四个接口地址   | Config          | 初始 SSO 配置 |
| loading?     | Loading 组件             | React.ReactNode | -             |
| clearFields? | 自定义退出登录清除的字段 | React.ReactNode | -             |

### Config

默认值为如下

```json
{
  "view": "/account/user/view",
  "login": "/account/user/login",
  "logout": "/account/user/logout",
  "validate": "/account/token/validate"
}
```

```typescript
interface LoginConfig {
  view: string;
  login: string;
  logout: string;
  validate: string;
}
```

### 说明

1. 查询 localStorage 中是否存在 token 参数

   - 若存在，则校验 token 是否合法
   - 若不存在，则跳转至登录页面

2. 若 veiw 或 validate 接口返回异常，则跳转至退出登录

3. 默认登录后在 localStorage 存储 SSO 返回的用户数据如下

```json
{
  "token": "jwt token",
  "menu": "SSO返回的菜单信息，数组格式，需要JSON.parse解构",
  "current_user": "当前登录用户，对象格式，包含 cname ename uid"
}
```
