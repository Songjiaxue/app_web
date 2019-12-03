import React from "react";
import moment from "moment";
import { Icon } from "antd";
import PropTypes from "prop-types";
import "./index.less";

const week = ["一", "二", "三", "四", "五", "六", "日"];

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: moment(), // 当前天
      dates: [], // 日历table
      extraDate: [2], // 额外添加元素
    };
  }

  componentDidMount() {
    this.getDate();
  }

  // render table
  getDate = () => {
    const { currentDay } = this.state;
    const { onChange } = this.props;
    const date = moment(moment(currentDay).format("YYYY-MM-DD"));
    const currentMonthDays = date.daysInMonth(); // 获取当月天数
    const currentWeekday = date.date(1).weekday() || 7; // 获取当月1日为星期几
    const lastMonthDays = date.subtract(1, "month").daysInMonth(); // 获取上月天数
    const daysArr = Array.from(new Array(currentMonthDays), (v, k) => k + 1); // 生成当月天数的数组
    // 将上月天数补足 上月天数 - 当月1日为星期数 - i
    for (let i = currentWeekday; i > 1; i -= 1) {
      daysArr.unshift(lastMonthDays - (currentWeekday - i));
    }
    // 将下月天数补足 i
    if (daysArr.length % 7) {
      for (let i = 1; i <= daysArr.length % 7; i += 1) {
        daysArr.push(i);
      }
    }
    this.setState(
      {
        dates: daysArr,
      },
      () => {
        onChange && onChange(currentDay.valueOf());
      },
    );
  };

  // 下一月
  addMonth = () => {
    const { currentDay } = this.state;
    this.setState(
      {
        currentDay: currentDay.add(1, "month"),
      },
      this.getDate,
    );
  };

  // 上一月
  minusMonth = () => {
    const { currentDay } = this.state;
    this.setState(
      {
        currentDay: currentDay.subtract(1, "month"),
      },
      this.getDate,
    );
  };

  // 选择天
  selectDay = v => {
    const { currentDay } = this.state;

    this.setState(
      {
        currentDay: moment(`${currentDay.format("YYYY-MM")}-${v}`),
      },
      () => {
        const { onChange } = this.props;
        const { currentDay: d } = this.state;
        onChange && onChange(d.valueOf());
      },
    );
  };

  setExtraInfo = e => {
    this.setSatate({
      extraDate: [e],
    });
  };

  render() {
    const { currentDay, dates, extraDate } = this.state;
    const { lineHeight } = this.props;
    return (
      <div className="app-calendar">
        <div className="app-calendar-title">
          <div className="title-icon" onClick={this.minusMonth}>
            <Icon type="left" />
          </div>
          <div className="title-in">{currentDay.format("YYYY年MM月DD日")}</div>
          <div className="title-icon" onClick={this.addMonth}>
            <Icon type="right" />
          </div>
        </div>
        <div className="app-calendar-week">
          {week.map(v => (
            <div key={v}>{v}</div>
          ))}
        </div>
        <div className="app-calendar-day">
          <div className="row">
            {dates.map((v, i) => {
              const dis = (i <= 7 && v > 20) || (i > 20 && v <= 7);
              const cur = Number(currentDay.format("DD"));
              const active = `${cur === v ? "active" : ""} ${
                extraDate.includes(v) ? "extra" : ""
              }`;
              return dis ? (
                <div
                  key={i}
                  className="disable col"
                  style={{
                    lineHeight,
                  }}
                >
                  {v}
                </div>
              ) : (
                <div
                  key={i}
                  className="col"
                  onClick={() => {
                    this.selectDay(v);
                  }}
                >
                  <span className={active}>
                    <span>{v}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  lineHeight: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
Calendar.defaultProps = {
  lineHeight: ".8rem",
  onChange: () => {},
};

export default Calendar;
