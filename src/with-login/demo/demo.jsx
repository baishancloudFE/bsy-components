import React from 'react';
import { WithLogin } from 'bsy-components';

const Demo = ({ children }) => {
  // do something...
  return (
    <WithLogin open={false} domain="https://www.baishancloud.com">
      {children}
    </WithLogin>
  );
};

export default Demo;
