import React from 'react';

export type MultipleValue = Array<string | number>;
export type SingleValue = string | number;

export type SelectTagsValue = MultipleValue | SingleValue;

export interface SelectTagsOption {
  label: React.ReactNode;
  value: SingleValue;
}

export interface SelectTagsProps {
  mode?: 'multiple' | 'single'; // 多选 or 单选
  options: SelectTagsOption[]; // 选项
  value: SelectTagsValue; // form-item 传递的值
  onChange(v: SelectTagsValue | null): void; // form-item 值改变事件
}
