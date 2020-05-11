import React from 'react';
import ReactDOM from 'react-dom';
import ChoseModal from './ChoseModal';

export default {
  open: function (config: any) {
    const div = document.createElement('div');
    document.body.appendChild(div);

    let currentConfig = { ...config, close, visible: true } as any;

    function render(props: any) {
      ReactDOM.render(<ChoseModal {...props} />, div);
    }

    function close() {
      currentConfig = {
        ...currentConfig,
        visible: false,
      };
      render(currentConfig);
      setTimeout(() => {
        const unmountResult = ReactDOM.unmountComponentAtNode(div);
        if (unmountResult && div.parentNode) {
          div.parentNode.removeChild(div);
        }
      }, 200);
    }

    render(currentConfig);
  },
};
