import React, { useCallback, useMemo, useState } from 'react';
import { Button, Col, Form, Grid, Row, Space } from 'antd';
import { SearchField } from './interface';
import { createFormItem } from './util';

interface FilterFormProps {
  calculate: boolean;
  fields: SearchField[];
  dataSource: any[] | undefined;
  onSubmit: (data?: any[] | { [key: string]: any }) => void;
}

const { Item } = Form;
const { useBreakpoint } = Grid;
const colFilterLayout = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 };

const FilterForm: React.FC<FilterFormProps> = ({ calculate, fields, dataSource, onSubmit }) => {
  const [form] = Form.useForm();

  const screens = useBreakpoint();

  const [expand, setExpand] = useState<boolean>(false);

  const findFieldConfigType = useCallback(
    (key) => {
      const item = fields.find((v) => v.name === key);
      return item?.config?.type;
    },
    [fields],
  );

  const onReset = useCallback(() => {
    form.resetFields();
    form.submit();
  }, [form]);

  const onFinish = useCallback(
    (values: { [key: string]: any }): void => {
      if (calculate) {
        onSubmit(values);
        return;
      }

      const names = Object.keys(values).filter((key) => {
        if (typeof values[key] === 'number') {
          return true;
        }
        return !!values[key];
      });

      if (names.length === 0) {
        onSubmit(dataSource);
        return;
      }

      const data = dataSource?.filter((item) => {
        return names.some((key) => {
          const type = findFieldConfigType(key);

          if (!type || type === 'input') {
            return item[key].includes(String(values[key]));
          }
          return item[key] === values[key];
        });
      });

      onSubmit(data);
    },
    [calculate, dataSource, findFieldConfigType, onSubmit],
  );

  const gridLayout = useMemo(() => {
    const types = Object.entries(screens).reverse();
    const item = types.find((v) => v[1]);
    return item ? 24 / colFilterLayout[item[0]] : 1;
  }, [screens]);

  const renderItems = useMemo(() => {
    const count = gridLayout === 1 ? 1 : gridLayout - 1;
    const array = expand ? fields : fields.slice(0, count);
    const span = 24 / gridLayout;

    return array.map(({ label, name, config }) => (
      <Col key={config?.name || name} span={span}>
        <Item label={config?.label || label} name={config?.name || name}>
          {createFormItem(config)}
        </Item>
      </Col>
    ));
  }, [expand, gridLayout, fields]);

  return (
    <Form form={form} onFinish={onFinish} style={{ marginBottom: 12 }}>
      <Row gutter={16} align="top">
        {renderItems}
        <Col
          span={expand || gridLayout === 1 ? 24 : 24 / gridLayout}
          style={{ textAlign: 'right', lineHeight: '32px' }}
        >
          <Space size="small">
            <Button size="small" type="link" onClick={() => setExpand(!expand)}>
              {expand ? '隐藏' : '展开'}
            </Button>
            <Button size="small" type="default" onClick={onReset}>
              重置
            </Button>
            <Button size="small" type="primary" htmlType="submit">
              查询
            </Button>
          </Space>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
