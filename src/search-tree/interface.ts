import React from 'react';
import { TreeNodeNormal, TreeProps } from 'antd/es/tree/Tree';

export interface SearchTreeProps<T, U extends { [key: string]: any }>
  extends Omit<TreeProps, 'onCheck'> {
  placeholder?: string; // 搜索框提示
  parentCheckedAble?: boolean; // 父节点是否可选
  parentNodeHide?: boolean; // 父节点是否隐藏
  childNodeHide?: boolean; // 子节点是否隐藏
  dataSource: Array<TreeNodeNormal>; // 数据源
  onCheck?: (keys: Array<React.ReactText>, key: React.ReactText, checked: boolean) => void;
}
