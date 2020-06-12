---
title: ImportExcel
order: 2
group:
  title: 其他
  path: /other
  order: 3
---

# ImportExcel

导入 excel 文件

### Examples

<code src="./demo/index.jsx" />

### 参数

\*注：可选择闭合标签或自定义 children,同 antd 中的 Upload

| 参数     | 是否必填 | 说明                             | 类型                  | 默认值 |
| -------- | -------- | -------------------------------- | --------------------- | ------ |
| rules    | 必填     | data 的 key 值对应的中文名称描述 | {[key:string]: any}   | {}     |
| onFinish | 必填     | 导入文件后依据 rules 转换的数据  | (data: any[]) => void | -      |
