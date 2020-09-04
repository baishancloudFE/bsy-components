import React from 'react';
import { render } from '@testing-library/react';

export default function mountTest(Component: React.ComponentType) {
  test('component could be updated and unmounted without errors', () => {
    const wrapper = render(<Component />);
    expect(() => {
      wrapper.unmount();
      wrapper.rerender(<Component />);
    }).not.toThrow();
  });
}
