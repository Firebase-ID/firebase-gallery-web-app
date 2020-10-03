import React, {Component} from "react";
import {Avatar, Card} from "antd";
import 'antd/dist/antd.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

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
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="icons/192x192.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </div>
    )
  }
}

export default ProfileCard;
