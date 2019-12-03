import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Icon from "@components/icon";
import "./index.less";

@withRouter
class AppNote extends Component {
  goBack = () => {
    const { history } = this.props;
    history.go(-1);
  };

  render() {
    const url = "https://juejin.im/post/5dd75cd5e51d45234b6de20a";
    return (
      <div className="app-note">
        <div className="app-title">
          <div className="main">MY NOTES</div>
          <div className="sub">我的笔记</div>
          <div className="desc">
            <span>关于javascript的一些笔记</span>
          </div>
        </div>
        <div className="app-note-main">
          <div className="item">
            <div className="line"></div>
            <div className="title">调用栈经典题解</div>
            <div className="content">
              <p>
                变量声明:
                在执行上下文时，首先会处理函数声明，其次会处理变量声明，如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性。
              </p>
              连续赋值:
              对象重新赋值时，并非是修改原堆内存的值，而是重新分配堆内存，栈内存中的指针会做相应修改。
            </div>
            <div className="link">
              <a href={url} target="_blank" rel="noopener noreferrer">
                阅读全文
              </a>
            </div>
          </div>
          <div className="item">
            <div className="line"></div>
            <div className="title">123</div>
            <div className="content">12121212</div>
            <div className="link">
              <a href={url} target="_blank" rel="noopener noreferrer">
                阅读全文
              </a>
            </div>
          </div>
        </div>
        <div className="app-back" onClick={this.goBack}>
          <Icon type="icon-leftarrow" />
          <span>返回</span>
        </div>
      </div>
    );
  }
}

export default AppNote;
