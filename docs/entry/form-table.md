---
group:
  title: 数据录入
---

# FormTable

动态表格类型的表单项

### Examples

<code src="../../src/form-table/demo/index.jsx" />
<code src="../../src/form-table/demo/demo2.jsx" />

### 参数

| 参数    | 说明         | 类型      | 默认值 |
| ------- | ------------ | --------- | :----: |
| name    | 表单项 name  | string    |   -    |
| columns | 列配置       | Columns[] |   -    |
| dynamic | 是否动态增删 | boolean   |  true  |

### Columns

```typescript
interface Columns {
  type: 'text' | 'input' | 'number' | 'date' | 'select';
  required?: boolean;
  props?: { [key: string]: any } | any;
  options?: Array<{ label: React.ReactText; value: string | number }>;
}
```

| 参数     | 说明               | 默认值 |
| -------- | ------------------ | :----: |
| type     | ComponentType      |   -    |
| required | 是否必填           |   -    |
| props    | 传递给控件的 props |   -    |
| options  | 下拉列表的值组合   |   -    |

其余配置与 antd 的 columns 配置相同

### 目前支持的控件类型

```typescript
interface ComponentType {
  text: TextFormItem;
  input: Input;
  number: InputNumber;
  date: DatePicker;
  select: Select;
}
```
