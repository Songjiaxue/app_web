import React, { Component } from "react";
import "./index.css";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="_index">
          {/* 头 */}
          <div className="head">
            {/* 脸 */}
            <div className="face">
              {/* 眼睛 */}
              <div className="eye">
                <div className="left_eye">
                  <div className="left_eye_ball" />
                </div>
                <div className="right_eye">
                  <div className="right_eye_ball" />
                </div>
              </div>
              {/* 鼻子 */}
              <div className="nose" />
              {/* 鼻线 */}
              <div className="nose_line" />
              {/* 嘴 */}
              <div className="mouse" />
              {/* 胡须 */}
              <div className="mustache">
                <div className="mustache-left">
                  <div className="mustache-item" />
                  <div className="mustache-item" />
                  <div className="mustache-item" />
                </div>
                <div className="mustache-right">
                  <div className="mustache-item" />
                  <div className="mustache-item" />
                  <div className="mustache-item" />
                </div>
              </div>
            </div>
          </div>
          {/* 脖子 */}
          <div className="neck">
            {/* 铃铛 */}
            <div className="ring">
              <div className="ring-line" />
            </div>
          </div>
          {/* 身体 */}
          <div className="body">
            {/* 手 */}
            <div className="hand">
              <div className="hand-left">
                <div className="hand-ball" />
                <div className="hand-bounch" />
              </div>
              <div className="hand-right">
                <div className="hand-ball" />
                <div className="hand-bounch" />
              </div>
            </div>
            {/* 脚 */}
            <div className="foot">
              <div className="foot-left" />
              <div className="foot-right" />
            </div>
            {/* 口袋 */}
            <div className="pocket">
              <div className="pocket-in" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
