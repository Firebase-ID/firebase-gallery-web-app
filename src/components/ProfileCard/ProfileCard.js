import React, {Component} from "react";
import {Avatar, Card} from "antd";
import 'antd/dist/antd.css';
import { EnvironmentOutlined, EllipsisOutlined, MessageOutlined } from '@ant-design/icons';

const { Meta } = Card;

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

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
            <EnvironmentOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src={this.props.avatar} />}
            title={this.props.title}
            description={this.props.description}
          />
        </Card>
      </div>
    )
  }
}

export default ProfileCard;
