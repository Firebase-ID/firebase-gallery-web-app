import React from "react";
import 'antd/dist/antd.css';
import './Loading.css'
import {Spin, Space} from 'antd';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-element">
        <Space size="middle">
          <Spin size="large"/>
          <h2 className="loading-text">Loading</h2>
        </Space>
      </div>
    </div>
  )
};

export default Loading;
