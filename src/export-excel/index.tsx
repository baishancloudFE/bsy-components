import React from "react";
import ReactDOM from "react-dom";
import ChoseModal from "./ChoseModal";
import download from "./download";

function open(config: any) {
  if (config.screening === false) {
    download(config.rules, config.data, config.filename);
    return;
  }

  const div = document.createElement("div");
  document.body.appendChild(div);

  let currentConfig = { ...config, close, visible: true } as any;

  function render(props: any) {
    ReactDOM.render(<ChoseModal {...props} />, div);
  }

  function close() {
    currentConfig = {
      ...currentConfig,
      visible: false
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
}

const ExportExcel = { open };

export default ExportExcel;
