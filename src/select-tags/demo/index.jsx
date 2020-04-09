import React from 'react';
import { Form } from 'antd';
import { SelectTags } from 'bsy-components';

const { Item } = Form;

const options = [
  { label: '宇智波佐助', value: 'zuozhu' },
  { label: '宇智波鼬', value: 'you' },
  { label: '宇智波止水', value: 'zhishui' },
];

const Demo = () => {
  return (
    <Form
      initialValues={{
        single: 'zuozhu',
        multiple: ['you', 'zhishui'],
      }}
    >
      <Item label="单选标签" name="single">
        <SelectTags mode="single" options={options} />
      </Item>
      <Item label="多选标签" name="multiple">
        <SelectTags options={options} />
      </Item>
    </Form>
  );
};

export default Demo;
