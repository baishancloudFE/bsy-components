import React from 'react';
import { SearchTree } from 'bsy-components';

const data = [
  {
    key: 'global',
    title: 'global',
    children: [],
  },
  {
    key: 'dx',
    title: '电信',
    children: [
      {
        key: 'dx-huadong',
        title: '电信-华东',
      },
      {
        key: 'dx-xian',
        title: '电信-西安',
      },
      {
        key: 'dx-huanan',
        title: '电信-华南',
      },
    ],
  },
  {
    key: 'lt',
    title: '联通',
    children: [
      {
        key: 'lt-huadong',
        title: '联通-华东',
      },
      {
        key: 'lt-xian',
        title: '联通-西安',
      },
      {
        key: 'lt-huanan',
        title: '联通-华南',
      },
    ],
  },
];

const Index = () => {
  const onCheck = (keys, key, checked) => {
    console.log(keys, key, checked);
  };

  return (
    <SearchTree placeholder="输入节点名称" checkable={true} dataSource={data} onCheck={onCheck} />
  );
};

export default Index;
