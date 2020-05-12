import React from 'react';
import { Button } from 'antd';
import { ExportExcel } from 'bsy-components';

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

  return (
    <Button type="primary" onClick={download}>
      点击下载
    </Button>
  );
};

export default Demo;
