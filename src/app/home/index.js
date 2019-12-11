import React from "react";
import { withRouter } from "react-router-dom";
import HomeBg from "@assets/images/home-bg.png";
import "./index.less";

@withRouter
class AppHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goPage = () => {
    const { history } = this.props;
    history.push("/work");
  };

  render() {
    return (
      <div className="app-home">
        <div className="app-home-center">
          <div className="img-wrap" onClick={this.goPage}>
            <div className="img-b">
              <img src={HomeBg} alt="" />
            </div>
            <div className="img-s" onClick={this.goPage}>
              <img src={HomeBg} alt="" />
            </div>
          </div>
          <p>点击龙猫或左侧导航栏进入系统</p>
        </div>
      </div>
    );
  }
}
export default AppHome;
