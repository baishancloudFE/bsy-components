import React from 'react';
import { Form, Input } from 'antd';
import { FilterForm } from 'bsy-components';

const { Item } = Form;

const Demo = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const getFields = () => {
    const children = [];
    for (let i = 0; i < 10; i++) {
      children.push(
        <Item label={`input-${i}`} name={`input-${i}`}>
          <Input />
        </Item>,
      );
    }
    return children;
  };

  return (
    <FilterForm form={form} onFinish={onFinish}>
      {getFields()}
    </FilterForm>
  );
};

export default Demo;
