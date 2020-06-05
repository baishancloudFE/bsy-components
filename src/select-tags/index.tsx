import React from 'react';
import { Tag } from 'antd';
import produce from 'immer';
import { MultipleValue, SelectTagsProps, SelectTagsValue, SingleValue } from './interface';

const SelectTags: React.FC<SelectTagsProps> = ({ mode, options, value, onChange }) => {
  const onCheckedChange = (checked: boolean, v: SingleValue): void => {
    // @ts-ignore
    const newValue = produce(value, (draft: SelectTagsValue) => {
      if (mode === 'single') {
        return checked ? v : null;
      }

      if (checked) {
        return (draft as MultipleValue).push(v);
      }
      return (draft as MultipleValue).filter((s) => s !== v);
    });
    onChange(newValue);
  };

  const isTagChecked = (v: SingleValue): boolean => {
    if (mode === 'single') {
      return v === value;
    }
    return (value as MultipleValue).includes(v);
  };

  return (
    <div>
      {options.map((item, index) => (
        <Tag.CheckableTag
          style={{ marginBottom: 2, cursor: 'pointer' }}
          key={`select-tags-${index}`}
          checked={isTagChecked(item.value)}
          onChange={(checked) => onCheckedChange(checked, item.value)}
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
