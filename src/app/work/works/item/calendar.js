import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Calendar from "@components/calendar";
import Icon from "@components/icon";

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
          <div className="desc">
            <span>日历组件，支持额外的日期标点，以及选中日期高亮</span>
          </div>
        </div>
        <div className="app-works-main">
          <div className="main-left">
            <div className="title">关键实现</div>
            <div>
              <span className="label">部分代码：</span>
              {/* eslint-disable */}
							<pre>
								<code>
									{`// 获取当月天数
const currentMonthDays = date.daysInMonth(); 
// 获取当月1日为星期几
const currentWeekday = date.date(1).weekday() || 7;
// 获取上月天数
const lastMonthDays = date.subtract(1, "month").daysInMonth(); 
// 生成当月天数的数组
const daysArr = Array.from(new Array(currentMonthDays), (v, k) => k + 1); 
// 将上月天数补足 上月天数 - 当月1日为星期数 - i
for (let i = currentWeekday; i > 1; i -= 1) {
  daysArr.unshift(lastMonthDays - (currentWeekday - i))
}
// 将下月天数补足 i
if (daysArr.length % 7) {
  for (let i = 1; i <= daysArr.length % 7; i += 1) {
    daysArr.push(i);
  }
}`}
								</code>
							</pre>
						</div>
					</div>
					<div className="main-right">
						<Calendar />
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

export default Dingdangmao;
