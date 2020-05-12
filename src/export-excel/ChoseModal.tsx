import React, { useMemo, useState } from 'react';
import { Checkbox, Col, Divider, Modal, Row } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import download, { Rule } from './download';

interface ChoseModalProps {
  visible: boolean;
  close: () => void;
  rules: Rule;
  data: Array<Rule>;
  filename: string;
}

const { Group } = Checkbox;

const ChoseModal: React.FC<ChoseModalProps> = ({
  visible,
  close,
  rules,
  data,
  filename,
}) => {
  const initialKeys: Array<CheckboxValueType> = useMemo(
    () => Object.keys(rules),
    [rules],
  );
  const options = useMemo(
    () => initialKeys.map((key) => ({ label: rules[String(key)], value: key })),
    [initialKeys, rules],
  );

  const [checkedList, setCheckedList] = useState(initialKeys);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAllStatus, setCheckAllStatus] = useState(true);

  const onChange = (list: Array<CheckboxValueType>) => {
    const length = Object.keys(rules).length;

    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < length);
    setCheckAllStatus(list.length === length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    const { checked } = e.target;

    setCheckedList(checked ? initialKeys : []);
    setIndeterminate(false);
    setCheckAllStatus(checked);
  };

  const onSubmit = () => {
    const keys = checkedList.reduce((res: any, key) => {
      const str = String(key);
      if (str in rules) {
        res[str] = rules[str];
      }
      return res;
    }, {});
    download(keys, data, filename);
    close();
  };

  return (
    <Modal
      visible={visible}
      title="导出Excel"
      width={900}
      destroyOnClose={true}
      okText="下载"
      cancelText="取消"
      onCancel={close}
      onOk={onSubmit}
    >
      <div>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAllStatus}
        >
          全选
        </Checkbox>
      </div>
      <Divider />
      <Group value={checkedList} onChange={onChange} style={{ width: '100%' }}>
        <Row>
          {options.map(({ label, value }, index) => (
            <Col span={6} key={`chose-export-${index}`}>
              <Checkbox value={value}>{label}</Checkbox>
            </Col>
          ))}
        </Row>
      </Group>
    </Modal>
  );
};

ChoseModal.defaultProps = {
  rules: {},
  data: [],
  filename: 'Excel表格',
};

export default ChoseModal;
