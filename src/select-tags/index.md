---
title: SelectTags
group:
  title: 数据录入
  path: /select-tags
---

# SelectTags

用于表单内的多选或单选标签

### Examples

<code src="./demo/demo1.jsx" />

### 参数

| 参数     | 说明               | 类型                                     |  默认值  |
| -------- | ------------------ | ---------------------------------------- | :------: |
| mode     | 类型               | string(multiple \| single)               | multiple |
| options  | 可选项数据源       | Option[]                                 |    -     |
| value    | Form.Item 自动提供 | string \| string[] \| number \| number[] |    -     |
| onChange | Form.Item 自动提供 | (value) => void                          |    -     |

### Option

```typescript
interface SelectTagsOption {
  label: React.ReactNode;
  value: SingleValue;
}
```
