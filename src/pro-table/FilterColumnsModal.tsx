import React, { forwardRef, useCallback, useContext, useImperativeHandle, useState } from 'react';
import { Modal, Transfer } from 'antd';
import { Context } from './store';

const FilterColumnsModal = forwardRef((props, ref) => {
  const {
    state: { columns, hides },
    dispatch,
  } = useContext(Context);

  const [visible, setVisible] = useState(false);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  const onTransferChange = useCallback(
    (keys: string[], direction: string, moveKeys: string[]) => {
      let array = [...hides];

      if (direction === 'right') {
        array.push(...moveKeys);
      } else {
        array = keys;
      }

      dispatch({
        type: 'add-hide-keys',
        payload: array,
      });
    },
    [hides, dispatch],
  );

  useImperativeHandle(ref, () => ({
    open: () => {
      setVisible(true);
    },
  }));

  return (
    <Modal visible={visible} title="筛选显示列" width={688} onCancel={onClose} footer={null}>
      <Transfer
        titles={['显示', '隐藏']}
        targetKeys={hides}
        showSelectAll
        dataSource={columns}
        render={(item) => item.title}
        listStyle={{
          width: 300,
          height: 400,
        }}
        onChange={onTransferChange}
      />
    </Modal>
  );
});

export default FilterColumnsModal;
