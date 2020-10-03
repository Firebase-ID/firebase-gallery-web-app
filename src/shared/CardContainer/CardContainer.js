import React, {Component} from "react";
import {Card} from "antd";
import 'antd/dist/antd.css';
import './CardContainer.css';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {content} = this.props;
    return (
      <Card className="card-container">{content}</Card>
    )
  }
}

export default CardContainer;
