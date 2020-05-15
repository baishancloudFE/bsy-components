import { ComponentClass, FunctionComponent } from 'react';
import { ColumnProps, TableProps } from 'antd/es/table';

export type ComponentMap = {
  [key: string]: string | ComponentClass<any, any> | FunctionComponent<any>;
};

// TODO
export type ComponentProps = { [key: string]: any } | any;

export type FormListColumns = ColumnProps<FormListData>;

export interface FormListData {
  name: number;
  key: number;
  fieldKey: number;
}

export interface Columns extends FormListColumns {
  type: 'text' | 'input' | 'number' | 'date' | 'select';
  required?: boolean;
  props?: ComponentProps;
  options?: Array<{ label: React.ReactText; value: string | number }>;
}

export interface FormTableProps
  extends Omit<TableProps<FormListData>, 'columns'> {
  name: string;
  columns: Columns[];
  dynamic?: boolean;
  template?: any;
}
