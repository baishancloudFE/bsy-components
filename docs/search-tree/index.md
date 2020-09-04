---
title: SearchTree
order: 1
group:
  title: 数据展示
  path: show
  order: 2
---

# SearchTree

当子节点内容较多需要搜索并高亮展示时，使用搜索树可快速找到目标节点。

### Examples

<code src="./demo.jsx" />

### 参数

| 参数 | 是否必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| dataSource | 必填 | 数据源 | array\<{key, title, children, [disabled, selectable]}> | - |
| placeholder | 非必填 | 搜索框提示的文本 | string | "Search" |
| parentCheckedAble | 非必填 | 父节点是否可选择 | boolean | false |
| parentNodeHide | 非必填 | 过滤节点时父节点是否隐藏 | boolean | false |
| childNodeHide | 非必填 | 过滤节点时子节点是否隐藏 | boolean | true |

其他参数与 antd 的 Tree 组件一致[Tree](https://ant.design/components/tree-cn/)
