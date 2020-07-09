import React from 'react';
import { Input, InputNumber, Select } from 'antd';
import { SearchOptions } from './interface';

const { Option } = Select;
const itemMap = {
  select: Select,
  number: InputNumber,
};

export function createFormItem(config?: SearchOptions) {
  if (!config) {
    return <Input autoComplete="off" />;
  }

  if (config.render) {
    return config.render;
  }

  const { type, options, props = {} } = config;

  let children = null;

  if (type === 'select') {
    if (!Array.isArray(options)) {
      throw new Error('search类型的控件必须传递options参数');
    }
    children = options.map(({ label, value }) => (
      <Option key={value} value={value}>
        {label}
      </Option>
    ));
  }

  return React.createElement(itemMap[type], { ...props, allowClear: true }, children);
}
