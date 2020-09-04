import React, { useCallback, useEffect, useMemo } from 'react';
import { Col, Form, Row, Button, Space } from 'antd';
import { FormProps } from 'antd/es/form';
import { ColProps } from 'antd/es/col';

interface FilterFormProps extends FormProps {
  loading?: boolean;
  itemLayout?: {
    labelCol?: ColProps;
    wrapperCol?: ColProps;
  };
  extra?: React.ReactNode[];
  didSubmit?: boolean;
  children: React.ReactChild;
}

const colFilterLayout = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 };
const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 8 }, md: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 16 }, md: { span: 18 } },
};

const FilterForm: React.FC<FilterFormProps> = (props) => {
  const { children, form, itemLayout = formItemLayout, loading, extra, didSubmit, ...rest } = props;

  const onReset = useCallback(() => {
    if (form != null) {
      form.resetFields();
      if ('onFinish' in props) {
        form.submit();
      }
    }
  }, [form, props]);

  const render = useMemo(() => {
    if (Array.isArray(children)) {
      return children.map((item, index) => (
        <Col key={`filter-form-${index}`} {...colFilterLayout}>
          {item}
        </Col>
      ));
    }
    return <Col {...colFilterLayout}>{children}</Col>;
  }, [children]);

  useEffect(() => {
    if (didSubmit === true && form != null) {
      form.submit();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Form form={form} {...rest} {...itemLayout}>
      <Row>{render}</Row>
      <Row justify="end">
        <Space size="middle">
          {Array.isArray(extra) && extra}
          <Button loading={loading} onClick={onReset}>
            重置
          </Button>
          <Button type="primary" htmlType="submit" loading={loading}>
            查询
          </Button>
        </Space>
      </Row>
    </Form>
  );
};

export default FilterForm;
