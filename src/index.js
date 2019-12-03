import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "@assets/less/rem.less";
import "@assets/less/common.less";
import App from "./App";

ReactDOM.render(
  <HashRouter>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </HashRouter>,
  document.getElementById("root"),
);
