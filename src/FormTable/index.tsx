import React, { useCallback } from 'react';
import { Button, Form, Input, InputNumber, Select, Table } from 'antd';
import { ColumnProps, TableProps } from 'antd/es/table';

type FormColumnsFn<T> = (remove: (index: number) => void) => ColumnProps<T>[];

interface FormListData {
  name: number;
  key: number;
  fieldKey: number;
}

interface Columns<T> extends ColumnProps<T> {
  type: 'text' | 'number' | 'select';
  required?: boolean;
  enum?: Array<{ label: React.ReactText; value: string | number }>;
}

export interface FormTableProps<T, U extends { [key: string]: any }>
  extends Omit<TableProps<T>, 'columns'> {
  name: string | number | (string | number)[];
  columns: Columns<T>[];
}

const { Item } = Form;
const { Option } = Select;

const;

const FormTable = <T, U extends { [key: string]: any } = {}>(
  props: FormTableProps<FormListData, U>,
) => {
  const { name, size = 'small', columns, ...rest } = props;

  const setItemRequire = useCallback((require?: boolean) => {
    if (require) {
      return [{ required: true, message: '不允许为空' }];
    }
    return [{ required: false }];
  }, []);

  const formColumns = useCallback<FormColumnsFn<FormListData>>(
    remove => {
      const array = [...columns];

      array.forEach(item => {
        switch (item.type) {
          case 'number':
            return (item.render = (text, row, index) => (
              <Item
                name={[index, item.dataIndex as string]}
                required={setItemRequire(item.required)}
              >
                <InputNumber size={size} />
              </Item>
            ));
          case 'select':
            if (!item.enum) {
              throw new Error('columns配置的select类型没有传递enum参数');
            }
            return (item.render = (text, row, index) => (
              <Item
                name={[index, item.dataIndex as string]}
                required={setItemRequire(item.required)}
              >
                <Select showSearch allowClear>
                  {item.enum.map(({ lable, value }) => (
                    <Option key={value} value={value}>
                      {lable}
                    </Option>
                  ))}
                </Select>
              </Item>
            ));
        }
      });

      columns.forEach(item => {
        let render = null;
        switch (item.type) {
          case 'number':
            return (render = (text, row, index) => (
              <Item name={[index, row.dataIndex]}>
                <InputNumber size={size} />
              </Item>
            ));
          case 'select':
            if (!item.enum) {
              throw new Error('columns配置的select类型没有传递enum参数');
            }
            return;
        }
      });

      return [
        ...columns,
        {
          dataIndex: 'delete',
          title: '操作',
          align: 'center',
          render: (text, row) => (
            <Button
              size="small"
              type="danger"
              ghost={true}
              onClick={() => remove(row.name)}
            >
              删除
            </Button>
          ),
        },
      ];
    },
    [columns],
  );

  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => (
        <React.Fragment>
          <Table
            size="small"
            pagination={false}
            bordered={true}
            columns={formColumns(remove)}
            dataSource={fields}
            {...rest}
          />
          <Button size="small" type="dashed" onClick={() => add()}>
            添加一行
          </Button>
        </React.Fragment>
      )}
    </Form.List>
  );
};

export default FormTable;
