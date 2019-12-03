import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import DINGDANGMAO from "@assets/images/dingdangmao.jpg";
import CALENDAR from "@assets/images/calendar.jpg";
import Icon from "@components/icon";
import "./index.less";

@withRouter
class AppWork extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goPage = path => {
    const { history } = this.props;
    history.push(path);
  };

  render() {
    return (
      <div className="app-work">
        <div className="app-title">
          <div className="main">MY WORK</div>
          <div className="sub">我的作品</div>
          <div className="desc">react技术栈、vue技术栈、expressjs技术栈</div>
        </div>
        <div className="app-work-main">
          <div
            className="item active"
            onClick={() => {
              this.goPage("/work/1");
            }}
          >
            <div className="item-wrap">
              <div className="border-top">
                <div className="space"></div>
                <div className="square-wrap">
                  <div className="square">
                    <div className="in"></div>
                  </div>
                </div>
                <div className="space"></div>
              </div>
              <div className="item-content">
                <img src={DINGDANGMAO} alt="" />
              </div>
            </div>
            <div className="item-footer">
              <span>纯css绘制多啦a梦</span>
            </div>
          </div>
          <div
            className="item"
            onClick={() => {
              this.goPage("/work/2");
            }}
          >
            <div className="item-wrap">
              <div className="border-top">
                <div className="space"></div>
                <div className="square-wrap">
                  <div className="square">
                    <div className="in"></div>
                  </div>
                </div>
                <div className="space"></div>
              </div>
              <div className="item-content">
                <img src={CALENDAR} alt="" />
              </div>
            </div>
            <div className="item-footer">
              <span>日历组件</span>
            </div>
          </div>
          <div className="item">
            <div className="item-wrap">
              <div className="border-top">
                <div className="space"></div>
                <div className="square-wrap">
                  <div className="square">
                    <div className="in"></div>
                  </div>
                </div>
                <div className="space"></div>
              </div>
              <div className="item-content">
                <img src={DINGDANGMAO} alt="" />
              </div>
            </div>
            <div className="item-footer">
              <span>纯css绘制多啦a梦</span>
            </div>
          </div>
          <div className="item">
            <div className="item-wrap">
              <div className="border-top">
                <div className="space"></div>
                <div className="square-wrap">
                  <div className="square">
                    <div className="in"></div>
                  </div>
                </div>
                <div className="space"></div>
              </div>
              <div className="item-content">
                <img src={DINGDANGMAO} alt="" />
              </div>
            </div>
            <div className="item-footer">
              <span>纯css绘制多啦a梦</span>
            </div>
          </div>
        </div>
        <div className="app-work-page">
          <div className="back">
            <Icon type="icon-leftarrow" />
            <span>上一页</span>
          </div>
          <div className="right">
            <span>下一页</span>
            <Icon type="icon-Rightarrow" />
          </div>
        </div>
      </div>
    );
  }
}

export default AppWork;
