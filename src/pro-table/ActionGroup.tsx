import React, { useCallback, useMemo, useState } from 'react';
import { Space, Tooltip } from 'antd';
import { FullscreenOutlined, FullscreenExitOutlined, SettingOutlined } from '@ant-design/icons';
import { FilterColumnsModalRef } from './interface';

interface ActionGroupProps {
  root: HTMLDivElement | null;
  modal: FilterColumnsModalRef | null;
}

const style = {
  fontSize: 18,
  lineHeight: '24px',
};

const ActionGroup: React.FC<ActionGroupProps> = ({ root, modal }) => {
  const [fullStatus, setFullStatus] = useState(false);

  const openModal = useCallback(() => {
    if (!modal) {
      return;
    }
    modal.open();
  }, [modal]);

  const onFullScreenClick = useCallback(async () => {
    if (!root || !document.fullscreenEnabled) {
      return;
    }

    setFullStatus(!fullStatus);

    if (fullStatus) {
      await document.exitFullscreen();
    } else {
      await root.requestFullscreen();
    }
  }, [root, fullStatus]);

  return useMemo(
    () => (
      <Space size="middle">
        <Tooltip title={fullStatus ? '退出全屏' : '全屏'}>
          {fullStatus ? (
            <FullscreenExitOutlined style={style} onClick={onFullScreenClick} />
          ) : (
            <FullscreenOutlined style={style} onClick={onFullScreenClick} />
          )}
        </Tooltip>
        <Tooltip title="筛选显示列">
          <SettingOutlined style={style} onClick={openModal} />
        </Tooltip>
      </Space>
    ),
    [fullStatus, onFullScreenClick, openModal],
  );
};

export default ActionGroup;
