import React, {Component} from "react";
import {Avatar, Card, Modal} from "antd";
import 'antd/dist/antd.css';
import { EnvironmentOutlined, EllipsisOutlined, MessageOutlined } from '@ant-design/icons';
import PositionView from '../PositionView/PositionView';

const { Meta } = Card;

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  showModal = () => {
    this.setState({
    visible: true,
    });
  };

  hideModal = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="profile-card-container">
        <Card
          className="profile-card"
          cover={
            <img
              alt="example"
              src={this.props.image}
            />
          }
          actions={[
            <MessageOutlined key="setting" />,
            <EnvironmentOutlined key="edit" onClick={() => this.showModal()}/>,
            <EllipsisOutlined key="ellipsis"  />
          ]}
        >
          <Meta
            avatar={<Avatar src={this.props.avatar} />}
            title={this.props.title}
            description={this.props.description}
          />
        </Card>

        <Modal 
          title="Position View"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
        >
          <PositionView />
        </Modal>
      </div>
    )
  }
}

export default ProfileCard;
