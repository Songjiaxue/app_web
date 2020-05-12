import React, { Component } from "react";
import { Modal } from "antd";

class ModalPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      url: "",
    };
  }

  show = url => {
    this.setState({
      visible: true,
      url,
    });
  };

  cancel = () => {
    this.setState({
      visible: false,
      url: "",
    });
  };

  render() {
    const { visible, url } = this.state;
    return (
      <Modal
        visible={visible}
        title="二维码预览"
        footer={null}
        onCancel={this.cancel}
        width="5rem"
      >
        {url && <img src={url} alt="" />}
      </Modal>
    );
  }
}

export default ModalPreview;
