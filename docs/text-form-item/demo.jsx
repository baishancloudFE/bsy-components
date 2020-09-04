import React from 'react';
import { Form, InputNumber } from 'antd';
import { TextFormItem } from 'bsy-components';

const Demo = () => {
  return (
    <Form
      initialValues={{
        name: '胡彦斌',
        age: 32,
        address: '北京',
      }}
    >
      <Form.Item label="姓名" name="name">
        <TextFormItem />
      </Form.Item>
      <Form.Item label="年龄" name="age">
        <InputNumber />
      </Form.Item>
      <Form.Item label="住址" name="address">
        <TextFormItem />
      </Form.Item>
    </Form>
  );
};

export default Demo;
