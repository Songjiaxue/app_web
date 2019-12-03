/*
 * @Author: songjiaxue
 * @Date: 2019-11-07 10:26:35
 * @Last Modified by: songjiaxue
 * @Last Modified time: 2019-11-26 14:35:16
 */

import React from "react";
import { Tooltip } from "antd";
import "./index.less";

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type, className, noTip, title, onClick } = this.props;
    return !noTip ? (
      <Tooltip title={title} placement="rightTop" overlayClassName="icon-tip">
        <div className="icon" onClick={onClick}>
          <svg className={`${className || ""} icon`} aria-hidden="true">
            <use xlinkHref={`#${type}`} />
          </svg>
        </div>
      </Tooltip>
    ) : (
      <div className="icon" onClick={onClick}>
        <svg className={`${className || ""} icon`} aria-hidden="true">
          <use xlinkHref={`#${type}`} />
        </svg>
      </div>
    );
  }
}
export default Icon;
