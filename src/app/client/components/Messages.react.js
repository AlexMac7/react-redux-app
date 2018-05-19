import * as React from 'react';
import axios from 'axios';
import Message from './Message.react'

class Messages extends React.Component {
    constructor () {
        super();
        this.state = {
            messages: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        axios.get('https://alex-test-autotelic.herokuapp.com/messages/')
                .then((response) => {
                    this.setState({messages: response.data.results})
                })
    }

    render() {
        return (
            <div>
                Messages
                <button onClick={this.handleClick}>Get Messages</button>
                <ul>
                    {this.state.messages.map(function (message) {
                        return (
                            <Message key={message.id} data={message} />
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default Messages;
