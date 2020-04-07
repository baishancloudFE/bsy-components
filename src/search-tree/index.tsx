import React, { useState, useEffect } from 'react';
import { Tree, Input } from 'antd';
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
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
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
    onCheck,
    ...rest
  } = props;

  const onExpand = (keys: string[]) => {
    setExpandedKeys(keys);
    setAutoExpandParent(false);
  };

  const { run: onChange } = useDebounceFn(value => {
    if (!value || value === '') {
      setSearchValue('');
      setExpandedKeys([]);
      return setAutoExpandParent(false);
    }
    const keys = dataList
      .map(item => {
        if (typeof item.title === 'string' && item.title.indexOf(value) > -1) {
          return getParentKey(item.key as string, dataSource);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);

    setExpandedKeys(keys as string[]);
    setSearchValue(value);
    setAutoExpandParent(true);
  }, 300);

  const loop = (data: Array<TreeNodeNormal>) =>
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
        return (
          <TreeNode
            key={item.key}
            title={title}
            disableCheckbox={!parentCheckedAble}
            style={index > -1 || !parentNodeHide ? {} : { display: 'none' }}
          >
            {loop(item.children)}
          </TreeNode>
        );
      }

      return (
        <TreeNode
          style={index > -1 || !childNodeHide ? {} : { display: 'none' }}
          key={item.key}
          title={title}
        />
      );
    });

  // 节点选择事件
  const nodeCheck = (keys: string[], info: AntTreeNodeCheckedEvent) => {
    if (typeof onCheck === 'function') {
      return onCheck(
        keys,
        info.node.props.eventKey as string,
        info.checked as boolean,
      );
    }
  };

  useEffect(() => {
    setDataList(generateList(dataSource));
  }, [dataSource]);

  const tree = () => {
    // TODO 因重载了onCheck方法报错 暂无解决思路
    return (
      // @ts-ignore
      <Tree
        {...rest}
        checkStrictly={checkStrictly}
        onCheck={nodeCheck}
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
      >
        {loop(dataSource)}
      </Tree>
    );
  };

  return (
    <div>
      <Search
        style={{ marginBottom: 8 }}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
      {tree()}
    </div>
  );
};

function getParentKey(key: string, tree: Array<TreeNodeNormal>): string | null {
  let parentKey: string | null = null;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key as string;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
}

function generateList(list: Array<TreeNodeNormal>) {
  let dataList: Array<GenerateData> = [];

  const loop = (data: Array<TreeNodeNormal>) => {
    for (let i = 0; i < data.length; i++) {
      const node = data[i];
      const key = node.key;
      dataList.push({ key, title: node.title });
      if (node.children) {
        loop(node.children);
      }
    }
  };
  loop(list);
  return dataList;
}

export default SearchTree;

SearchTree.defaultProps = {
  checkable: true,
  checkStrictly: true,
  parentCheckedAble: true,
  parentNodeHide: false,
  childNodeHide: true,
  placeholder: 'Search',
};
