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
      title: "react",
    },
    4: {
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
