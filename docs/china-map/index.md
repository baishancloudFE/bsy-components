---
title: ChinaMap
order: 2
group:
  title: 数据展示
  path: show
  order: 2
---

# ChinaMap

中国省份地图

### Example

<code src="./demo.jsx" />

### 参数

| 参数        | 是否必填 | 说明       | 类型         | 默认值  |
| ----------- | -------- | ---------- | ------------ | ------- |
| width       | 非必填   | 宽度       | (string      | number) | "100%" |
| height      | 非必填   | 高度       | (string      | number) | 500 |
| interactive | 非必填   | 鼠标等交互 | boolean      | false   |
| colors      | 非必填   | 颜色       | ColorOptions | -       |
| data        | 必填     | 数据源     | DataSource   | -       |

##### ColorOptions

```typescript
type ColorOptions = {
  background: string; // 背景色
  active: string; // 鼠标hover颜色
  line: string; // 区域边框线条颜色
  label: string; // 文字颜色
  values: string[]; // 区域背景色映射区间
};
```

---

##### DataSource

```typescript
type DataSource = Array<{
  name: string;
  value: number;
}>;

const data: DataSource = [
  { name: '北京', value: 120 },
  { name: '天津', value: 82 },
];
```

### 其他

1. 依赖`@antv/l7-react`包体积较大，可选择配置 cdn 或 dll 方式引入减少构建时间和体积
