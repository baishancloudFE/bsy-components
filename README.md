# igroot

[白山云前端业务组件库](https://baishancloudfe.github.io/bsy-components/)

<div align="center">
[![CircleCI branch](http://img.shields.io/travis/baishancloudFE/bsy-components.svg?style=flat-square)](https://travis-ci.com/baishancloudFE/bsy-components)

[![](https://flat.badgen.net/npm/v/bsy-components?icon=npm)](https://www.npmjs.com/package/bsy-components)

[![NPM downloads](http://img.shields.io/npm/dt/bsy-components.svg?style=flat-square)](http://npmjs.com/bsy-components)

</div>

## ✨ 特性

- 提炼自各业务中常用的组件
- 基于 antd 以及使用 TypeScript 编写，提供智能的编辑器提示
- 重写、整合散落在各地的 igroot 业务组件
- 严格遵循[http://semver.org/lang/zh-CN/](http://semver.org/lang/zh-CN/)语义化版本规范

## 🖥 支持环境

- React v16.8
- antd v4.0

## 📦 安装

```bash
npm install bsy-components
```

```bash
yarn add bsy-components
```

## 🔨 示例

```jsx
import { Form } from 'antd';
import { SelectTags } from 'bsy-components';

export default () => (
  <Form>
    <Form.Item label="多选标签" name="tags">
      <SelectTags mode="multiple" />
    </Form.Item>
  </Form>
);
```

## ⌨️ 集成在现有 SL 项目中

#### 升级依赖

bsy-components 依赖 React v16.8.0 或以上以及 antd v4.x 版本，在引入前务必升级您的依赖版本。

#### 更换 igroot 组件

_不兼容当前版本的 igroot!_

_不兼容当前版本的 igroot!_

_不兼容当前版本的 igroot!_

由于 igroot 是基于 antd v3.x 开发的，在使用前务必精读[从 v3 到 v4](https://ant.design/docs/react/migration-v4-cn)

另外，不建议使用`@ant-design/codemod-v4`进行迁移，尽量将所有业务代码的变化掌握在自己手里。

#### 修改配置

在 bsy.json 中配置 `useAntd: true`，打包时会默认将代码中的 igroot 替换为 antd(防止 igroot 全局样式影响)

详细配置请在 confluence 内搜索 `bsy.json`，如遇到问题请联系 @韬仔

#### 最佳实践

// TODO

## 👨‍💻‍ 维护者

[@ hanguihe](https://github.com/hanguihe)

## 🤝 如何贡献

非常欢迎你的加入！

请[提 issue](https://github.com/baishancloudFE/bsy-components/issues/new) 或直接提交 Pull Request

当然也可以直接在企业微信内联系我
