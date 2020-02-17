import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import DINGDANGMAO from "@assets/images/dingdangmao.jpg";
import CALENDAR from "@assets/images/calendar.jpg";
import QIONGLAI from "@assets/images/qionglai.jpg";
import EXPRESS from "@assets/images/express.jpg";
import ECHARTS from "@assets/images/echarts.jpg";
import SCHOOL from "@assets/images/school.jpg";
import "./index.less";

@withRouter
class AppWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          img: DINGDANGMAO,
          desc: "纯css绘制多啦a梦",
          // active: true,
        },
        {
          img: CALENDAR,
          desc: "日历组件",
        },
        {
          img: QIONGLAI,
          desc: "邛崃市民云（线上）",
          link: "https://smy.qionglai.gov.cn/wechat/?appType=wechat#/",
          type: "phone",
        },
        {
          img: EXPRESS,
          desc: "express+mysql+react",
          link: "http://47.93.214.176:8888/",
        },
        {
          img: ECHARTS,
          desc: "echarts汉化配置",
          link: "http://47.93.214.176:3000/",
        },
        {
          img: SCHOOL,
          desc: "毕业设计",
          link: "http://47.93.214.176:8000/",
        },
      ],
    };
  }

  goPage = ({ link, path, type }) => {
    if (link) {
      type
        ? window.open(
            link,
            "邛崃市民云",
            "height=812, width=375,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no, location=no,status=no",
          )
        : window.open(link);
    } else {
      const { history } = this.props;
      history.push(path);
    }
  };

  render() {
    const { list } = this.state;
    return (
      <div className="app-work">
        <div className="app-title">
          <div className="main">MY WORK</div>
          <div className="sub">我的作品</div>
          <div className="desc">react技术栈、vue技术栈、expressjs技术栈</div>
        </div>
        <div className="app-work-main">
          {list.map((v, key) => (
            <div
              // className={!(key % 4) ? "item active" : "item"}
              className="item"
              key={key}
              onClick={() => {
                this.goPage({
                  link: v.link,
                  path: `/work/${key + 1}`,
                  type: v.type,
                });
              }}
            >
              <div className="item-wrap">
                <div className="border-top">
                  <div className="space" />
                  <div className="square-wrap">
                    <div className="square">
                      <div className="in" />
                    </div>
                  </div>
                  <div className="space" />
                </div>
                <div className="item-content">
                  <img src={v.img} alt="" />
                </div>
              </div>
              <div className="item-footer">
                <span>{v.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AppWork;
