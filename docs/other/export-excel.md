---
group:
  title: 其他组件
---

# ExportExcel

导出 excel 文件

### Examples

<code src="../../src/export-excel/demo/index.jsx" />

### open 方法参数

| 参数      | 是否必填 | 说明                                      | 类型                      | 默认值       |
| --------- | -------- | ----------------------------------------- | ------------------------- | ------------ |
| data      | 必填     | 数据源                                    | array<{[key:string]:any}> | []           |
| rules     | 必填     | data 的 key 值对应的中文名称描述          | {[key:string]:any}        | {}           |
| filename  | 非必填   | 文件名称                                  | string                    | "excel 表格" |
| screening | 非必填   | 是否需要筛选(值为 false 时直接下载 excel) | boolean                   | true         |
