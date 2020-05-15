---
group:
  title: 数据录入
---

# FilterForm

响应式搜索表单容器

### Examples

<code src="../../src/filter-form/demo/demo.jsx" />

### 参数

| 参数       | 说明                                   | 类型              |                               默认值                                |
| ---------- | -------------------------------------- | ----------------- | :-----------------------------------------------------------------: |
| loading    | 加载状态                               | boolean           |                                  -                                  |
| itemLayout | 表单项布局方式                         | ItemLayout        |                             ItemLayout                              |
| extra      | 操作按钮旁其他组件                     | React.ReactNode[] |                                  -                                  |
| form       | 经 Form.useForm() 创建的 form 控制实例 | FormInstance      | [FormInstance](https://ant.design/components/form-cn/#FormInstance) |
| didSubmit  | 组件加载完成后是否执行提交事件         | boolean           |                                false                                |

其余参数与 Form 一致

### ItemLayout

```typescript
import { ColProps } from 'antd/es/col';

interface ItemLayout {
  itemLayout?: {
    labelCol?: ColProps;
    wrapperCol?: ColProps;
  };
}

const itemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 8 }, md: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 16 }, md: { span: 18 } },
};
```

配置同[antd 中的表单布局配置](https://ant.design/components/form-cn/#API)
