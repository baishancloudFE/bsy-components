import React, { useState, useEffect } from 'react';
import { Input, Tree } from 'antd';
import { useDebounceFn } from '@umijs/hooks';
import {
  AntTreeNodeCheckedEvent,
  TreeNodeNormal,
  TreeProps,
} from 'antd/es/tree/Tree';

export interface GenerateData {
  key: React.ReactText;
  title: React.ReactNode;
}

export interface SearchTreeProps<T, U extends { [key: string]: any }>
  extends Omit<TreeProps, 'onCheck'> {
  placeholder: string; // 搜索框提示
  parentCheckedAble: boolean; // 父节点是否可选
  parentNodeHide: boolean; // 父节点是否隐藏
  childNodeHide: boolean; // 子节点是否隐藏
  dataSource: Array<TreeNodeNormal>; // 数据源
  onCheck?: (
    keys: Array<React.ReactText>,
    key: React.ReactText,
    checked: boolean,
  ) => void;
}

const { TreeNode } = Tree;
const Search = Input.Search;

const SearchTree = <T, U extends { [key: string]: any } = {}>(
  props: SearchTreeProps<T, U>,
) => {
  const [expandedKeys, setExpandedKeys] = useState<Array<React.ReactText>>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const [dataList, setDataList] = useState<Array<GenerateData>>([]);

  const {
    dataSource,
    parentCheckedAble,
    parentNodeHide,
    childNodeHide,
    checkStrictly,
    placeholder,
    ...rest
  } = props;

  const onExpand = (keys: Array<React.ReactText>) => {
    setExpandedKeys(keys);
    setAutoExpandParent(false);
  };

  // 节点选择事件
  const nodeCheck = (
    keys: Array<React.ReactText>,
    info: AntTreeNodeCheckedEvent,
  ) => {
    const { checked } = info;
    const { eventKey } = info.node.props;

    if (typeof props.onCheck === 'function') {
      return props.onCheck(
        keys,
        eventKey as React.ReactText,
        checked as boolean,
      );
    }
  };

  const { run: onChange } = useDebounceFn(value => {
    if (!value || value === '') {
      setSearchValue(value);
      setExpandedKeys([]);
      return setAutoExpandParent(false);
    }
    const keys = dataList
      .map(item => {
        if (typeof item.title === 'string' && item.title.indexOf(value) > -1) {
          return getParentKey(item.key, dataSource);
        }
        return '';
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);

    setExpandedKeys(keys);
    setSearchValue(value);
    setAutoExpandParent(true);
  }, 300);

  const loop = (data: Array<TreeNodeNormal>): Array<TreeNodeNormal> =>
    data.map(item => {
      const index =
        typeof item.title === 'string' ? item.title.indexOf(searchValue) : 0;
      const beforeStr =
        typeof item.title === 'string' && item.title.substr(0, index);
      const afterStr =
        typeof item.title === 'string' &&
        item.title.substr(index + searchValue.length);

      const title =
        index > -1 ? (
          <span>
            {beforeStr}
            <span style={{ color: '#f50' }}>{searchValue}</span>
            {afterStr}
          </span>
        ) : (
          <span>{item.title}</span>
        );

      if (item.children) {
        return index > -1
          ? {
              key: item.key,
              title: title,
              disableCheckbox: !parentCheckedAble,
              children: loop(item.children),
            }
          : {
              style: parentNodeHide ? { display: 'none' } : {},
              key: item.key,
              title: title,
              disableCheckbox: !parentCheckedAble,
              children: loop(item.children),
            };
      }
      return index > -1
        ? { key: item.key, title: title }
        : {
            style: childNodeHide ? { display: 'none' } : {},
            key: item.key,
            title: title,
          };
    });

  // TODO 因重载了onCheck方法报错 暂无解决思路
  const tree = () => {
    return (
      // @ts-ignore
      <Tree
        {...rest}
        checkStrictly={checkStrictly}
        onCheck={nodeCheck}
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        treeData={loop(dataSource)}
      />
    );
  };

  useEffect(() => {
    setDataList(generateList(dataSource));
  }, [dataSource]);

  return (
    <>
      <Search
        style={{ marginBottom: 8 }}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
      {tree()}
    </>
  );
};

function getParentKey(
  key: React.ReactText,
  tree: Array<TreeNodeNormal>,
): React.ReactText {
  let parentKey: React.ReactText = '';

  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }

  return parentKey;
}

function generateList(list: Array<TreeNodeNormal>): Array<GenerateData> {
  let dataList: Array<GenerateData> = [];

  const loop = (data: Array<TreeNodeNormal>) => {
    for (let i = 0; i < data.length; i++) {
      const node: TreeNodeNormal = data[i];
      dataList.push({ key: node.key, title: node.title });
      if (node.children) {
        loop(node.children);
      }
    }
  };
  loop(list);
  return dataList;
}

SearchTree.defaultProps = {
  checkable: true,
  checkStrictly: true,
  parentCheckedAble: true,
  parentNodeHide: false,
  childNodeHide: true,
  placeholder: 'Search',
};

export default SearchTree;
