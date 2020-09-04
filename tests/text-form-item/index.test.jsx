import React from 'react';
import { render } from '@testing-library/react';
import mountTest from '../mountTest';
import TextFormItem from '../../src/text-form-item';

describe('TextFormItem', () => {
  mountTest(TextFormItem);

  it('should be controlled', () => {
    const wrapper = render(<TextFormItem value="忍者" />);
    const element = wrapper.queryByText('忍者');
    expect(element).toBeTruthy();
  });
});
