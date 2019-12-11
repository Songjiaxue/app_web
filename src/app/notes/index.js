import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import JUEJIN from "@assets/images/juejin.png";
import GITHUB from "@assets/images/github.png";
import "./index.less";

@withRouter
class AppNotes extends Component {
  types = {
    1: {
      title: "css",
    },
    2: {
      title: "javascript",
    },
    3: {
      title: "other",
    },
  };

  goPage = path => {
    const { history } = this.props;
    history.push(path);
  };

  render() {
    const juejin = "https://juejin.im/user/5992b33351882548440bda0e";
    const github = "https://github.com/Songjiaxue?tab=repositories";
    return (
      <div className="app-notes">
        <div className="app-title">
          <div className="main">MY NOTES</div>
          <div className="sub">我的笔记</div>
          <div className="desc">
            <span>css、javascript、react技术栈</span>
          </div>
        </div>
        <div className="app-notes-main">
          {Object.keys(this.types).map(v => (
            <div
              className="item"
              key={v}
              onClick={() => {
                this.goPage(`/notes/${v}`);
              }}
            >
              <div className="item-bg">
                <div className="item-in" />
              </div>
              <div className="item-content">
                <p>{this.types[v].title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="app-notes-desc">
          <div className="desc-wrap">
            <div>
              <p className="label">笔记整理于:</p>
            </div>
            <div>
              <p>
                <span>
                  <img src={JUEJIN} alt="掘金" />
                </span>
                <span> 掘金：</span>
                <a href={juejin} target="_blank" rel="noopener noreferrer">
                  https://juejin.im/user/5992b33351882548440bda0e
                </a>
              </p>
              <p>
                <span>
                  <img src={GITHUB} alt="github" />
                </span>
                github：
                <a href={github} target="_blank" rel="noopener noreferrer">
                  https://github.com/Songjiaxue?tab=repositories
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppNotes;
