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
        <div class="_index">
          {/* 头 */}
          <div class="head">
            {/* 脸 */}
            <div class="face">
              {/* 眼睛 */}
              <div class="eye">
                <div class="left_eye">
                  <div class="left_eye_ball"></div>
                </div>
                <div class="right_eye">
                  <div class="right_eye_ball"></div>
                </div>
              </div>
              {/* 鼻子 */}
              <div class="nose"></div>
              {/* 鼻线 */}
              <div class="nose_line"></div>
              {/* 嘴 */}
              <div class="mouse"></div>
              {/* 胡须 */}
              <div class="mustache">
                <div class="mustache-left">
                  <div class="mustache-item"></div>
                  <div class="mustache-item"></div>
                  <div class="mustache-item"></div>
                </div>
                <div class="mustache-right">
                  <div class="mustache-item"></div>
                  <div class="mustache-item"></div>
                  <div class="mustache-item"></div>
                </div>
              </div>
            </div>
          </div>
          {/* 脖子 */}
          <div class="neck">
            {/* 铃铛 */}
            <div class="ring">
              <div class="ring-line"></div>
            </div>
          </div>
          {/* 身体 */}
          <div class="body">
            {/* 手 */}
            <div class="hand">
              <div class="hand-left">
                <div class="hand-ball"></div>
                <div class="hand-bounch"></div>
              </div>
              <div class="hand-right">
                <div class="hand-ball"></div>
                <div class="hand-bounch"></div>
              </div>
            </div>
            {/* 脚 */}
            <div class="foot">
              <div class="foot-left"></div>
              <div class="foot-right"></div>
            </div>
            {/* 口袋 */}
            <div class="pocket">
              <div class="pocket-in"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
