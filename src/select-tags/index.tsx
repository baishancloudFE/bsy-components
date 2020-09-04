import React, { useCallback } from 'react';
import { Tag } from 'antd';
import { SelectTagsProps } from './interface';

const SelectTags: React.FC<SelectTagsProps> = ({ mode, options, value, onChange }) => {
  const onCheckChange = useCallback(
    (status, v) => {
      if (typeof onChange !== 'function') {
        return;
      }

      if (mode === 'single' && !Array.isArray(value)) {
        onChange(status ? v : null);
        return;
      }

      if (!Array.isArray(value)) {
        return;
      }

      if (status) {
        onChange([...value, v]);
      } else {
        onChange(value.filter((s) => s !== v));
      }
    },
    [mode, onChange, value],
  );

  const checkStatus = useCallback(
    (v) => {
      if (mode === 'single') {
        return v === value;
      }

      if (Array.isArray(value)) {
        return value.includes(v);
      }

      return false;
    },
    [mode, value],
  );

  return (
    <div>
      {options.map((item, index) => (
        <Tag.CheckableTag
          style={{ marginBottom: 2, cursor: 'pointer' }}
          key={`select-tags-${index}`}
          checked={checkStatus(item.value)}
          onChange={(checked) => onCheckChange(checked, item.value)}
        >
          {item.label}
        </Tag.CheckableTag>
      ))}
    </div>
  );
};

SelectTags.defaultProps = {
  mode: 'multiple',
  value: [],
  onChange: () => {},
  options: [],
};

export default SelectTags;
