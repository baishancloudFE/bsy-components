import React, { useCallback } from 'react';
import { Button, Form, Table } from 'antd';
import useColumns from './useColumns';
import { FormTableProps, FormListColumns } from './interface';
import './style.less';

const FormTable: React.FC<FormTableProps> = (props) => {
  const { name, dynamic = true } = props;

  const columns = useColumns(props.columns);

  const formColumns = useCallback(
    (remove): Array<FormListColumns> => {
      if (dynamic) {
        return [
          ...columns,
          {
            dataIndex: 'delete',
            title: '操作',
            width: '60px',
            align: 'center',
            render: (text, row) => (
              <Button
                size="small"
                danger={true}
                ghost={true}
                onClick={() => remove(row.name)}
              >
                删除
              </Button>
            ),
          },
        ];
      }
      return columns;
    },
    [columns, dynamic],
  );

  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => (
        <React.Fragment>
          <Table
            className="bsy-form-table"
            rowKey="key"
            size="small"
            bordered={true}
            pagination={false}
            columns={formColumns(remove)}
            dataSource={fields}
          />
          {dynamic && (
            <Button
              className="bsy-form-table-add-button"
              size="small"
              type="dashed"
              block={true}
              onClick={() => add()}
            >
              添加一行
            </Button>
          )}
        </React.Fragment>
      )}
    </Form.List>
  );
};

export default FormTable;
