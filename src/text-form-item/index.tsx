import React, { useMemo } from 'react';

interface TextFormItemProps {
  value?: string | number;
}

const TextFormItem: React.FC<TextFormItemProps> = ({ value }) =>
  useMemo(() => <span>{value}</span>, [value]);

export default TextFormItem;
