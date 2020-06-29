import React, { useCallback } from 'react';
import { Tag } from 'antd';
import { MultipleValue, SelectTagsProps } from './interface';

const SelectTags: React.FC<SelectTagsProps> = ({ mode, options, value, onChange }) => {
  const onCheckChange = useCallback(
    (status, v) => {
      if (mode === 'single') {
        onChange(status ? v : undefined);
        return;
      }

      const outValue = value as MultipleValue;
      const newValue = status ? [...outValue, v] : outValue.filter((s) => s !== v);

      onChange(newValue);
    },
    [mode, onChange, value],
  );

  const checkStatus = useCallback(
    (v) => {
      if (mode === 'single') {
        return v === value;
      }
      return (value as MultipleValue).includes(v);
    },
    [mode, value],
  );

  return (
    <div>
      {options.map((item) => (
        <Tag.CheckableTag
          style={{ marginBottom: 2, cursor: 'pointer' }}
          key={item.value}
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
