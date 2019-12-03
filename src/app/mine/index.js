import React, { Component } from "react";
import HEAD from "@assets/images/head.jpg";
import Icon from "@components/icon";
import "./index.less";

class AppMine extends Component {
  render() {
    return (
      <div className="app-mine">
        <div className="app-title">
          <div className="main">ABOUT ME</div>
          <div className="sub">关于我</div>
          <div className="desc">
            <span>好好学习，拯救地球</span>
          </div>
        </div>
        <div className="app-mine-main">
          <div className="main-left">
            <div className="main-title">基本信息</div>
            <div className="main-left-in">
              <div className="img-wrap">
                <img src={HEAD} alt="" />
              </div>
              <div>
                <p>宋佳雪</p>
                <p>1995.2.8</p>
                <p>浙江工商大学</p>
                <p>计算机与信息工程学院</p>
                <p>电子商务</p>
              </div>
            </div>
          </div>
          <div className="main-right">
            <div className="main-title">联系我</div>
            <div className="main-right-in">
              <p>
                <Icon type="icon-mobile-phone" />
                <span className="value">13216169636</span>
              </p>
              <p>
                <Icon type="icon-email" />
                <span className="value">457191858@qq.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppMine;
