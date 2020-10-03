import React, { Component } from "react";
import { Comment, Form, Input, Button } from "antd";
import './Comments.css';

const Editor = () => (
    <div>
      <Form.Item>
        <Input rows={4} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const mockComments = [
            {
                author: 'Jane Doe',
                avatar: 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png',
                content: 'Are you ok?',
                datetime: '12:52 pm'
            },
            {
                author: 'Ben Smith',
                avatar: 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png',
                content: 'I can help you!',
                datetime: '3:02 pm'
            },
            {
                author: 'A Person',
                avatar: 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png',
                content: 'I hope it worked out',
                datetime: '4:10 pm'
            }
        ]

        return (
            <div>
                {mockComments.map((c) => 
                    <Comment 
                        author={c.author}
                        avatar={c.avatar}
                        content={c.content}
                        datetime={c.datetime}
                    />
                )}
                <Comment
                    avatar={'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png'}                    
                    content={
                        <Editor
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        />
                    }
                    />
            </div>
        )
    }
}

export default Comments;