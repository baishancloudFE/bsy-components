import React from 'react';
import { ProTable } from 'bsy-components';

const columns = [
  {
    dataIndex: 'name',
    title: '名字',
    align: 'center',
    search: true,
  },
  {
    dataIndex: 'gender',
    title: '性别',
    align: 'center',
  },
  {
    dataIndex: 'age',
    title: '年龄',
    align: 'center',
    search: {
      type: 'number',
    },
  },
  {
    dataIndex: 'blood',
    title: '血型',
    align: 'center',
    search: {
      type: 'select',
      options: [
        { label: 'O型', value: 'O型' },
        { label: 'AB型', value: 'AB型' },
      ],
    },
  },
  {
    dataIndex: 'birthday',
    title: '生日',
    align: 'center',
    ellipsis: true,
  },
  {
    dataIndex: 'height-weight',
    title: '身高/体重',
    align: 'center',
    ellipsis: true,
    render: (text, row) => `${row.height} / ${row.weight}`,
  },
  {
    dataIndex: 'character',
    title: '性格',
    align: 'center',
    ellipsis: true,
  },
  {
    dataIndex: 'attribute',
    title: '查克拉属性',
    align: 'center',
    ellipsis: true,
  },
];

const dataSource = [
  {
    id: 1,
    name: '宇智波斑',
    gender: '男',
    age: 0,
    blood: 'O型',
    birthday: '12月24日',
    height: '179.0cm',
    weight: '71.3kg',
    character: '好战、野心家',
    attribute: '火、风、雷、土、水、阴、阳',
    skills: ['火遁·龙炎放歌之术🔥', '须佐能乎·完全体😈', '轮墓·边狱'],
  },
  {
    id: 3,
    name: '宇智波鼬',
    gender: '男',
    age: 21,
    blood: 'AB型',
    birthday: '6月9日',
    height: '178cm',
    weight: '58kg',
    character: '温柔智慧，为弟弟着想，自我牺牲',
    attribute: '火、风、水、阴、阳',
    skills: ['十拳剑', '八咫镜', '火遁·豪龙火之术', '天照', '月读', '须佐能乎·完全体', '伊邪那美'],
  },
];

const Demo = () => {
  return (
    <ProTable
      rowKey="name"
      statistic={<div>共{dataSource.length}条数据</div>}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default Demo;
