import React, { PureComponent } from "react";
import { Tabs } from "antd";
import Icon from "@components/icon";
import WENHAOYEQUAN from "@assets/images/acg/wenhaoyequan.jpeg";
import YUEKANSHAONV from "@assets/images/acg/yuekanshaonv.jpg";
import YELIANGSHEN from "@assets/images/acg/yeliangshen.jpeg";
import CIKEWULIUQI from "@assets/images/acg/cikewuliuqi.jpeg";
import LINZHUODEGUAITONGXUE from "@assets/images/acg/linzhuodeguaitongxue.jpeg";
import YIRENZHIXIA from "@assets/images/acg/yirenzhixia.jpg";
import GUIMIEZHIREN from "@assets/images/acg/guimiezhiren.jpeg";
import QIMUNANXIONG from "@assets/images/acg/qimunanxiong.jpg";
import WUYUETIAN from "@assets/images/singer/wuyuetian.jpeg";
import ONEOKROCK from "@assets/images/singer/oneokrock.jpeg";
import "./index.less";

class AppMine extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      acgList: [
        {
          name: "文豪野犬",
          url: WENHAOYEQUAN,
        },
        {
          name: "月刊少女野崎君",
          url: YUEKANSHAONV,
        },
        {
          name: "野良神",
          url: YELIANGSHEN,
        },
        {
          name: "邻桌的怪同学",
          url: LINZHUODEGUAITONGXUE,
        },
        {
          name: "齐木楠雄的灾难",
          url: QIMUNANXIONG,
        },
        {
          name: "鬼灭之刃",
          url: GUIMIEZHIREN,
        },
        {
          name: "一人之下",
          url: YIRENZHIXIA,
        },
        {
          name: "刺客伍六七",
          url: CIKEWULIUQI,
        },
      ],
      singerList: [
        {
          name: "永远的五月天",
          url: WUYUETIAN,
        },
        {
          name: "ONE OK ROCK",
          url: ONEOKROCK,
        },
      ],
      thingList: [
        {
          type: "2020年计划要学习的技能",
          list: [
            "做tomato-or-potato网站的移动端适配",
            "将tomato-or-potato这个网站的数据存进数据库，写一个后台管理系统",
            "完整再看一遍javascript权威指南，你不知道的js，并做一些笔记，分享到掘金网站",
            "学会typescript",
            "vue源码",
            "react源码",
          ],
        },
        {
          type: "2020年立下的flag",
          list: [
            "找一个非常满意的工作",
            // "学会吉他扫弦",
            // "有条件买个相机学摄影",
            // "多读书，多学习，少玩游戏",
          ],
        },
      ],
    };
  }

  render() {
    const { acgList, singerList, thingList } = this.state;
    return (
      <div className="app-mine">
        <div className="app-mine-main">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="PLAN" key="1">
              {thingList.map((v, i) => (
                <div className="app-mine-item" key={i}>
                  <div className="app-mine-title">
                    <Icon type="icon-insurance" />
                    {v.type}
                  </div>
                  {v.list.map((u, o) => (
                    <div className="plan-item" key={o}>
                      {u}
                    </div>
                  ))}
                </div>
              ))}
            </Tabs.TabPane>
            <Tabs.TabPane tab="FAVIRATE" key="2">
              <div className="app-mine-item">
                <div className="app-mine-title">喜欢的番剧</div>
                {acgList.map((v, i) => (
                  <div className="mine-item" key={i}>
                    <img src={v.url} alt={v.name} />
                    <div className="desc">{v.name}</div>
                  </div>
                ))}
              </div>
              <div className="app-mine-item">
                <div className="app-mine-title">喜欢的歌手</div>
                {singerList.map((v, i) => (
                  <div className="mine-item" key={i}>
                    <img src={v.url} alt={v.name} />
                    <div className="desc">{v.name}</div>
                  </div>
                ))}
              </div>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default AppMine;
