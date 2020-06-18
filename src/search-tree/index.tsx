import React, { useEffect, useCallback, useReducer, useMemo } from "react";
import { Tree, Input } from "antd";
import { TreeNodeNormal } from "antd/es/tree/Tree";
import { SearchTreeProps } from "./interface";
import { getParentKey, generateList, debounce } from "./util";
import reducer, { initialState } from "./store";

const { Search } = Input;

const SearchTree = <T, U extends { [key: string]: any } = {}>(props: SearchTreeProps<T, U>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
  const { expandedKeys, searchValue, autoExpandParent, flattenList } = state;

  const onExpand = useCallback((keys: any[]) => {
    dispatch({ type: "on-node-expand", payload: keys });
  }, []);

  const onChange = debounce((value: undefined | string) => {
    if (!value || value === "") {
      dispatch({ type: "reset-expand" });
      return;
    }
    const keys = flattenList
      .map((item) => {
        if (typeof item.title === "string" && item.title.indexOf(value) > -1) {
          return getParentKey(item.key as string, dataSource);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);

    dispatch({ type: "on-search-node", payload: { value, keys } });
  }, 300);

  const loop = useCallback((data: TreeNodeNormal[]): TreeNodeNormal[] => {
    return data.map((item) => {
      let { title } = item;
      let index = -1;
      if (typeof item.title === "string") {
        index = item.title.indexOf(searchValue);
        const beforeStr = item.title.substr(0, index);
        const afterStr = item.title.substr(index + searchValue.length);
        if (index > -1) {
          title = (
            <span>
              {beforeStr}
              <span style={{ color: "#f50" }}>{searchValue}</span>
              {afterStr}
            </span>
          );
        }
      }

      if (item.children) {
        return {
          key: item.key,
          title,
          disableCheckbox: !parentCheckedAble,
          style: index > -1 || !parentNodeHide ? {} : { display: "none" },
          children: loop(item.children)
        };
      }
      return {
        key: item.key,
        title,
        style: index > -1 || !childNodeHide ? {} : { display: "none" }
      };
    });
  }, [childNodeHide, parentCheckedAble, parentNodeHide, searchValue]);

  // 节点选择事件
  const nodeCheck = useCallback(
    (keys: any, info: any) => {
      if (typeof onCheck !== "function") {
        return;
      }
      onCheck(keys, info.node.props.eventKey as string, info.checked as boolean);
    },
    [onCheck]
  );

  useEffect(() => {
    dispatch({ type: "set-flatten-list", payload: generateList(dataSource) });
  }, [dataSource]);

  const tree = useMemo(() => (
    <Tree
      {...rest}
      checkStrictly={checkStrictly}
      onCheck={nodeCheck}
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      treeData={loop(dataSource)}
    />
  ), [autoExpandParent, checkStrictly, dataSource, expandedKeys, loop, nodeCheck, onExpand, rest]);

  return useMemo(() => (
    <div>
      <Search
        style={{ marginBottom: 8 }}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {tree}
    </div>
  ), [onChange, placeholder, tree]);
};

export default SearchTree;

SearchTree.defaultProps = {
  checkable: true,
  checkStrictly: true,
  parentCheckedAble: true,
  parentNodeHide: false,
  childNodeHide: true,
  placeholder: "Search"
};
