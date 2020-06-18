import React from "react";
import { TreeNodeNormal } from "antd/es/tree/Tree";

export function getParentKey(key: string, tree: Array<TreeNodeNormal>): string | null {
  let parentKey: string | null = null;
  for (let i = 0; i < tree.length; i += 1) {
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

export function generateList(list: Array<TreeNodeNormal>) {
  const dataList: Array<{ key: React.ReactText, title: React.ReactNode }> = [];

  const loop = (data: Array<TreeNodeNormal>) => {
    for (let i = 0; i < data.length; i += 1) {
      const { key, title, children } = data[i];
      dataList.push({ key, title });
      if (children) {
        loop(children);
      }
    }
  };
  loop(list);
  return dataList;
}

export function debounce(fn: any, delay = 300) {
  let timer: any = null;

  return function debounced(...args: any) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
}
