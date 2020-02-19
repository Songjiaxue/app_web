import React from "react";
import { Spin } from "antd";
// import { Toast, } from 'antd-mobile';
import "./index.less";

export default ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return (
      <div className="loading-box">
        <Spin />
      </div>
    );
  }
  // Handle the error state
  if (error) {
    return <div className="loading-wrap">抱歉, 加载文件失败，请刷新试试.</div>;
  }
  return null;
};
