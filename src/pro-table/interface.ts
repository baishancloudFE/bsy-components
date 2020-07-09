import React from 'react';
import { TableProps, ColumnsType } from 'antd/es/table';

type ColumnStatus = 'default' | 'success' | 'error' | 'process';

export interface SearchOptions {
  label?: React.ReactNode;
  name?: string;
  type: 'select' | 'input' | 'number';
  options?: [{ label: React.ReactNode; value: string | number }];
  props?: { [key: string]: any };
  render?: React.ReactNode;
}

export interface SearchField {
  label: React.ReactNode;
  name: string;
  config?: SearchOptions;
}

export interface ProColumns<T = unknown> extends Omit<ColumnsType<T>, 'dataIndex'> {
  dataIndex: string;
  title: React.ReactNode;
  // 是否本地搜索
  search?: boolean | SearchOptions;
  // 内容是否复制
  copyable?: boolean;
  // 是否添加bradge状态
  status?: ColumnStatus;
}

export interface ProTableProps<T, U extends { [key: string]: any }>
  extends Omit<TableProps<T>, 'columns'> {
  columns: ProColumns<T>[];
  statistic?: React.ReactNode;
  defaultHideColumns?: string[];
  onFilterColumnsChange?: (keys: string[]) => void;
  onSearch?: (values: { [key: string]: any }) => void;
}

export interface FilterColumnsModalRef {
  open: () => void;
}
