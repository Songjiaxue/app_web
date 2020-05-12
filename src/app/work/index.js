import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import DINGDANGMAO from "@assets/images/dingdangmao.jpg";
import CALENDAR from "@assets/images/calendar.jpg";
import QIONGLAI from "@assets/images/qionglai.jpg";
import QIONGLAICODE from "@assets/images/qionglai-code.png";
import MINSUCODE from "@assets/images/minsu-code.jpeg";
import MINSU from "@assets/images/minsu.jpg";
import EXPRESS from "@assets/images/express.jpg";
import ECHARTS from "@assets/images/echarts.jpg";
import SCHOOL from "@assets/images/school.jpg";
import ModalPreview from "./works/modal";
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
          img: MINSU,
          desc: "民宿小程序（线上）",
          link: MINSUCODE,
          type: "phone",
        },
        {
          img: QIONGLAI,
          desc: "邛崃市民云（线上）",
          link: QIONGLAICODE,
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
      // type
      //   ? window.open(
      //       link,
      //       "邛崃市民云",
      //       "height=812, width=375,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no, location=no,status=no",
      //     )
      //   : window.open(link);
      if (type) {
        this.modalRef.show(link);
      } else {
        window.open(link);
      }
    } else {
      const { history } = this.props;
      history.push(path);
    }
  };

  render() {
    const { list } = this.state;
    return (
      <div className="app-work">
        <div className="app-work-main">
          {list.map((v, key) => (
            <div
              // className={!(key % 4) ? "item active" : "item"}
              className="item"
              key={key}
              onClick={() => {
                this.goPage({
                  link: v.link,
                  path: `/works/${key + 1}`,
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
        <ModalPreview ref={ref => (this.modalRef = ref)} />
      </div>
    );
  }
}

export default AppWork;
