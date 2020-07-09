---
title: ProTable
order: 1
group:
  title: 数据展示
  path: show
  order: 2
---

# ProTable

扩展了很多功能的表格组件

✔️ 本地表单过滤

❌ 单元格内容复制

❌ 单元格超出隐藏并显示 tooltip

✔️ 配置显示列

❌ 导出导入 Excel

✔️ 全屏

### 基本示例

<code src="./demo/index.jsx" />

### 本地过滤

##### 基本使用

- 通过在 `columns` 内配置 `search` 字段可快速开启本地过滤功能
- 当所有字段都没有设置 `search` 属性时，则不开启本地过滤。

```json
{
  "dataIndex": "name",
  "title": "名字",
  "align": "center",
  "search": true
}
```

##### 定制

除了设置 `boolean` 值外，还可以进行更深一步的定制

```typescript
interface SearchOptions {
  label?: React.ReactNode;
  name?: string;
  type: 'select' | 'input' | 'number';
  options?: [{ label: React.ReactNode; value: string | number }];
  props?: { [key: string]: any };
  render?: React.ReactNode;
}
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :-: |
| label | 表单项 label | React.ReactNode | columns 中的 title |
| name | 表单项 name | string | columns 中的 dataIndex |
| type | 控件类型 | 'select' or 'input' or 'number' | 'input' |
| options | type 为 select 时配置的 options | [{ label: React.ReactNode; value: string | number }] | - |
| props | 传递给控件的 props | - | - |
| render | 自定义控件 | - | - |

##### 自动执行过滤

`ProTable` 会默认将用户输入的值与 `dataSource` 进行匹配。当然，你也可选择自己实现过滤方法，仅需要向 `ProTable` 传递 `onSearch` 属性。

---

## 筛选显示列

`ProTable`会默认开启筛选显示列功能，通过 defaultHideColumns 属性可以配置默认隐藏的列

**ProTable 使用 dataIndex 作为 key 值进行筛选**

// TODO 不启用？
