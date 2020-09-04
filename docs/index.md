---
title: 轻松上手
path: /start
order: 0
---

# igroot

[白山云前端业务组件库](https://baishancloudfe.github.io/bsy-components/)

[![Deploy CI](https://github.com/baishancloudFE/bsy-components/workflows/Deploy%20CI/badge.svg)](https://github.com/baishancloudFE/bsy-components/actions?query=workflow%3A%22Deploy+CI%22) [![NPM version](https://flat.badgen.net/npm/v/bsy-components?icon=npm)](https://www.npmjs.com/package/bsy-components) [![NPM downloads](http://img.shields.io/npm/dt/bsy-components.svg?style=flat-square)](http://npmjs.com/bsy-components)

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

_不兼容当前版本的 igroot!_

_不兼容当前版本的 igroot!_

_不兼容当前版本的 igroot!_

#### 全新项目

1. 卸载`igroot`并安装`antd@4.x`
2. 在 bsy.json 中配置 `useAntd: true`，打包时会默认将代码中的 igroot 替换为 antd(防止 igroot 全局样式影响)
3. 将`antd`及`bsy-components`注册在 bsy.json 的`esMoudule`中

_详细配置请在 confluence 内搜索 `bsy.json`，如遇到问题请联系 @韬仔_

#### igroot 及 antd@3.x 并存的老项目中

1. 升级`antd`至 V4 版本，务必精读[从 v3 到 v4](https://ant.design/docs/react/migration-v4-cn)
2. 使用`@ant-design/codemod-v4`进行 V3 版本代码迁移
3. 无需配置`useAntd`选项
4. 将`antd`及`bsy-components`注册在 bsy.json 的`esMoudule`中
5. 样式冲突请自行修改

_不建议使用工具进行迁移，尽量将所有业务代码的变化掌握在自己手里。_

## 部署方式

#### 文档部署方式

1. 合并到 master 分支后自动构建部署到 GitHub page 上
2. 内网部署
   - 执行命令：`npm run docs:build`
   - 将`dist`目录下所有文件部署到内网机器上

#### npm 发布

1. 执行命令（需要切换至 `npm` 源）
   ```bash
   $ npm publish
   ```

## 👨‍💻‍ 维护者

[@ hanguihe](https://github.com/hanguihe)

## 🤝 如何贡献

非常欢迎你的加入！

请[提 issue](https://github.com/baishancloudFE/bsy-components/issues/new) 或直接提交 Pull Request

当然也可以直接在企业微信内联系我
