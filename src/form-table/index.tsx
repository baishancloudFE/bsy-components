import React, { useCallback } from 'react';
import {
  Button,
  Form,
  Input,
  Table,
  InputNumber,
  DatePicker,
  Select,
} from 'antd';
import { ColumnProps, TableProps } from 'antd/es/table';
import './style.less';

interface FormListData {
  name: number;
  key: number;
  fieldKey: number;
}

interface Columns extends ColumnProps<FormListData> {
  type: 'text' | 'number' | 'date' | 'select';
  required?: boolean;
  // TODO
  props?: { [key: string]: any } | any;
  options?: Array<{ label: React.ReactText; value: string | number }>;
}

interface FormTableProps extends Omit<TableProps<FormListData>, 'columns'> {
  name: string;
  columns: Columns[];
  dynamic?: boolean;
}

const { Item } = Form;
const { Option } = Select;

const FormTable: React.FC<FormTableProps> = (props) => {
  const { name, columns, dynamic = true } = props;

  const formColumns = useCallback(
    (remove) => {
      const array: ColumnProps<FormListData>[] = [];

      columns.forEach((item) => {
        const arrItem = { ...item };
        let children: React.ReactNode = null;
        switch (item.type) {
          case 'text':
            children = <Input {...item.props} />;
            break;
          case 'number':
            children = <InputNumber {...item.props} />;
            break;
          case 'date':
            children = <DatePicker {...item.props} />;
            break;
          case 'select':
            if (!Array.isArray(item.options)) {
              throw new Error('类型为type时，必须传递options参数');
            }
            children = (
              <Select {...item.props}>
                {item.options.map(({ label, value }, index) => (
                  <Option key={`form-item-select${index}`} value={value}>
                    {label}
                  </Option>
                ))}
              </Select>
            );
            break;
          default:
            break;
        }
        arrItem.render = (text, row, index) => (
          <Item
            name={[index, String(item.dataIndex)]}
            rules={
              item.required
                ? [{ required: true, message: `请填写${item.title}` }]
                : undefined
            }
          >
            {children}
          </Item>
        );
        array.push(arrItem);
      });
      if (dynamic) {
        array.push({
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
        });
      }

      return array;
    },
    [columns],
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
