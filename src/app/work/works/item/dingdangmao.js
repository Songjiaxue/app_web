import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import DINGDANGMAO from "@components/dingdangmao";

@withRouter
class Dingdangmao extends Component {
  goBack = () => {
    const { history } = this.props;
    history.go(-1);
  };

  render() {
    return (
      <div className="app-works">
        <div className="app-title">
          <div className="main">MY WORK</div>
          <div className="sub">我的作品</div>
          <div className="desc">纯css绘制哆啦a梦</div>
        </div>
        <div className="app-works-main">
          <div className="main-left">
            <div className="title">关键实现</div>
            <div>
              <span className="label">相对定位：</span>
              设置为相对定位的元素框会偏移某个距离。
              元素仍然保持其未定位前的形状， 它原本所占的空间仍保留。
            </div>
            <div>
              <span className="label">圆角：</span>
              哆啦a梦的身体各部分由各种圆角组成。
            </div>
            <div>
              <span className="label">2d旋转（rotate）：</span>
              哆啦a梦的身体各部分姿势由元素的旋转完成。
            </div>
            <div>
              <span className="label">部分代码：</span>
              {/* eslint-disable */}
							<pre>
								position: absolute; <br />
								width: 60%; <br />
								top: -20px; <br />
								left: 50%; <br />
								-webkit-transform: translate(-50%, 0); <br />
								transform: translate(-50%, 0); <br />
								zoom: 1;
							</pre>
						</div>
					</div>
					<div className="main-right">
						<DINGDANGMAO />
					</div>
				</div>
			</div>
		);
	}
}

export default Dingdangmao;
