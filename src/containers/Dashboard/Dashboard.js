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
          <CardContainer
            content={
              <ProfileCard
                image={'https://www.photos-public-domain.com/wp-content/uploads/2018/04/feral-cat-with-tipped-ear-300x300.jpg'} 
                title={'Lost cat!'}
                description={'I was out walking my cat, but I looked away for a second and he was gone!'}
                avatar={'https://images.unsplash.com/photo-1523221197642-4a2e4b6a3dcf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'}
              />
            } 
          />
          <CardContainer
            content={
              <ProfileCard
                image={'https://thumbs.dreamstime.com/b/flat-tire-blue-car-road-waiting-repair-leak-nail-pounding-141204359.jpg'
                } 
                title={'Flat tire'}
                description={'I\'m late for work, but I just got a flat. Can anyone help?'}
                avatar={'https://lh3.googleusercontent.com/proxy/wmI2mZVC_AuXL8nxAa6hIjLgdCxB5OhJY9pwu2xp62qAIPx1je0a2Dq_Lt84DG1FcoDdikxLnPqya-9G-lJoObEhWfokzG9FRUcdpZ8fFLAuPmyfl5wTAe7IrKGludfo6-KkqHe_1jB-odBnbtskjSJzi0qD'}
              />
            } 
            
          />
        </Fade>
      </div>
    )
  }
}

export default Dashboard;
