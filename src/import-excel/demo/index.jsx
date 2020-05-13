import React from 'react';
import { ImportExcel, ExportExcel } from 'bsy-components';
import { Button, Row, Table } from 'antd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

const data = [
  {
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const rules = {
  name: '名字',
  age: '年龄',
  address: '地址',
};

const Demo = () => {
  const download = () => {
    ExportExcel.open({
      filename: '测试下载demo',
      rules,
      data,
      screening: false,
    });
  };

  const onFinish = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Row justify="end" style={{ marginBottom: 8 }}>
        <ImportExcel rules={rules} onFinish={onFinish} />
        <Button type="primary" onClick={download} style={{ marginLeft: 12 }}>
          点击下载
        </Button>
      </Row>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default Demo;
