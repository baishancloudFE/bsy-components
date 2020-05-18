import React, { useMemo } from 'react';
import { DatePicker, Form, Input, InputNumber, Select } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import TextFormItem from '../text-form-item';
import { Columns, FormListData, ComponentMap } from './interface';

const { Item } = Form;
const { Option } = Select;

const componentMap: ComponentMap = {
  text: TextFormItem,
  input: Input,
  number: InputNumber,
  date: DatePicker,
  select: Select,
};

function getItemChildren(item: Columns, index?: number) {
  const component = componentMap[item.type];

  const props = {
    ...item.props,
  };
  let children = null;

  if ('onChange' in props) {
    props.onChange = (value: any) => {
      item.props.onChange(value, index);
    };
  }

  if ('style' in props) {
    props.style = { width: '100%', ...item.props.style };
  } else {
    props.style = { width: '100%' };
  }

  if (item.type === 'select') {
    if (!Array.isArray(item.options)) {
      throw new Error('类型为select时，必须传递option参数');
    }
    children = item.options.map(({ label, value }, index) => (
      <Option key={`form-item-select${index}`} value={value}>
        {label}
      </Option>
    ));
  }

  return React.createElement(component, props, children);
}

function useColumns(columns: Array<Columns>) {
  return useMemo(() => {
    const array: ColumnProps<FormListData>[] = [];

    columns.forEach((item) => {
      const arrItem = { ...item };

      if (!item.render) {
        arrItem.render = (text, row, index) => (
          <Item
            name={[index, String(item.dataIndex)]}
            rules={
              item.required
                ? [{ required: true, message: `请填写${item.title}` }]
                : undefined
            }
          >
            {getItemChildren(item, index)}
          </Item>
        );
      }
      array.push(arrItem);
    });
    return array;
  }, [columns]);
}

export default useColumns;
