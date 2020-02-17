import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
      </div>
    );
  }
}

export default AppNotes;
