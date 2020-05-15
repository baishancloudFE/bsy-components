import React from 'react';
import { Button, Form } from 'antd';
import { FormTable } from 'bsy-components';

const Demo = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const columns = [
    {
      dataIndex: 'name',
      title: '姓名',
      width: 120,
      align: 'center',
      type: 'text',
    },
    {
      dataIndex: 'age',
      title: '年龄',
      width: 100,
      align: 'center',
      type: 'number',
      props: {
        min: 0,
        max: 100,
      },
    },

    {
      dataIndex: 'address',
      title: '住址',
      width: 120,
      align: 'center',
      type: 'select',
      props: {
        showSearch: true,
        allowClear: true,
        onChange: (value, index) => console.log(value, index),
      },
      options: [
        { label: '北京', value: 'bj' },
        { label: '杭州', value: 'hz' },
        { label: '厦门', value: 'xm' },
      ],
    },
  ];

  return (
    <Form
      form={form}
      onFinish={onFinish}
      initialValues={{
        users: [
          { name: '胡彦斌', age: 32, address: 'bj' },
          { name: '胡彦祖', age: 42, address: 'hz' },
        ],
      }}
    >
      <FormTable name="users" columns={columns} dynamic={false} />

      <Button htmlType="submit" type="primary">
        提交
      </Button>
    </Form>
  );
};

export default Demo;
