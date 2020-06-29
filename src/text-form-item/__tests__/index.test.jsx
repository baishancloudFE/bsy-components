import React from 'react';
import { render } from '@testing-library/react';
import mountTest from '../../../tests/mountTest';
import TextFormItem from '..';

describe('TextFormItem', () => {
  mountTest(TextFormItem);

  it('should be controlled', () => {
    const wrapper = render(<TextFormItem value="忍者" />);
    const element = wrapper.queryByText('忍者');
    expect(element).toBeTruthy();
  });
});
