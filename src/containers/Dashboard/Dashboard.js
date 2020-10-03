import React, {Component} from "react";
import {ProfileCard} from "../../components";
import {CardContainer} from "../../shared";
import {Fade} from "react-reveal";
import {showNotification} from "../../service-worker/NotificationServiceWorker";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Fade left>
          <CardContainer content={<ProfileCard/>}/>
          <CardContainer content={<ProfileCard/>}/>
        </Fade>
      </div>
    )
  }
}

export default Dashboard;
