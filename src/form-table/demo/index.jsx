/**
 * title: 基本用法
 */

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
      type: 'input',
      props: {
        autoComplete: 'off',
      },
      required: true,
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
      },
      options: [
        { label: '北京', value: 'bj' },
        { label: '杭州', value: 'hz' },
        { label: '厦门', value: 'xm' },
      ],
    },
    {
      dataIndex: 'time',
      title: '生效时间',
      width: 120,
      align: 'center',
      type: 'date',
      props: {
        style: { width: '100%' },
        format: 'YYYY/MM/DD',
      },
    },
  ];

  return (
    <Form form={form} onFinish={onFinish}>
      <FormTable name="users" columns={columns} />

      <Button htmlType="submit" type="primary">
        提交
      </Button>
    </Form>
  );
};

export default Demo;
