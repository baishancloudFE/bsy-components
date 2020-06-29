import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SelectTags from '..';
import mountTest from '../../../tests/mountTest';

const options = [
  { label: '忍者', value: 'ninja' },
  { label: '武士', value: 'samurai' },
];

describe('SelectTags', () => {
  mountTest(SelectTags);

  it('should be controlled', () => {
    const wrapper = render(<SelectTags mode="single" options={options} value="ninja" />);
    const element = wrapper.queryByText('忍者');

    expect(element.className.includes('ant-tag-checkable-checked')).toBeTruthy();
  });

  it('should return value as string when mode is single', () => {
    const onChange = jest.fn();
    const wrapper = render(<SelectTags mode="single" onChange={onChange} options={options} />);
    const element = wrapper.queryByText('忍者');
    fireEvent.click(element);
    expect(onChange).toHaveBeenCalledWith('ninja');
  });

  it('should return value as undefined when deselect and mode is single', () => {
    const onChange = jest.fn();
    const wrapper = render(
      <SelectTags mode="single" value="ninja" onChange={onChange} options={options} />,
    );
    const element = wrapper.queryByText('忍者');
    fireEvent.click(element);
    expect(onChange).toHaveBeenCalledWith(undefined);
  });

  it('should return value as array when mode is multiple', () => {
    const onChange = jest.fn();
    const wrapper = render(<SelectTags mode="multiple" onChange={onChange} options={options} />);
    const element = wrapper.queryByText('忍者');
    fireEvent.click(element);
    expect(onChange).toHaveBeenCalledWith(['ninja']);
  });

  it('should return value as empty array when deselect and mode is multiple', () => {
    const onChange = jest.fn();
    const wrapper = render(
      <SelectTags mode="multiple" value={['ninja']} onChange={onChange} options={options} />,
    );
    const element = wrapper.queryByText('忍者');
    fireEvent.click(element);
    expect(onChange).toHaveBeenCalledWith([]);
  });
});
