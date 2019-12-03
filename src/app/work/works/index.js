import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Dingdangmao from "./item/dingdangmao";
import Calendar from "./item/calendar";
import "./index.less";

@withRouter
class AppWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
    };
  }

  goBack = () => {
    const { history } = this.props;
    history.go(-1);
  };

  render() {
    const { id } = this.state;
    switch (id) {
      case "1":
        return <Dingdangmao />;
      case "2":
        return <Calendar />;
      default:
        break;
    }
  }
}

export default AppWorks;
