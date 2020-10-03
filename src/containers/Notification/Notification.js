import React, {Component} from "react";
import Box from "@material-ui/core/Box/Box";
import Container from "@material-ui/core/Container/Container";
import { Fade } from "react-reveal";
import { Comment } from "antd";
import './Notification.css';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const mockNotifications = [
      {
        author: 'Billy Bard · Lost cat!',
        avatar: 'https://images.unsplash.com/photo-1523221197642-4a2e4b6a3dcf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
        content: 'I was out walking my cat, but I looked away for a second and he was gone!',
        datetime: '9:30 am'
      },
      {
        author: 'Phil Pellman · Flat tire',
        avatar: 'https://lh3.googleusercontent.com/proxy/wmI2mZVC_AuXL8nxAa6hIjLgdCxB5OhJY9pwu2xp62qAIPx1je0a2Dq_Lt84DG1FcoDdikxLnPqya-9G-lJoObEhWfokzG9FRUcdpZ8fFLAuPmyfl5wTAe7IrKGludfo6-KkqHe_1jB-odBnbtskjSJzi0qD',
        content: 'I\'m late for work, but I just got a flat. Can anyone help?',
        datetime: '9:44 am'
      }, 
      {
        author: 'Justina Jaybird · Sugar',
        avatar: 'data:image/png;base64,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',
        content: 'I need one more cup of sugar to finish baking this cake! Does anyone have some spare? I need this done before 2:30',
        datetime: '1:01 pm'
      }
    ]

    return (
      <div>
        <Fade>
          <Container>
            <Box my={2}>
                {mockNotifications.map((c) => 
                  <Comment 
                    className="comment"
                    author={c.author}
                    avatar={c.avatar}
                    content={c.content}
                    datetime={c.datetime}
                    actions={[
                      <p>View post</p>
                    ]}
                  />
                )}
            </Box>
          </Container>
        </Fade>
      </div>
    )
  }
}

export default Notification;
