import * as React from 'react';
import axios from "axios/index";
import MessagesPage from './MessagesPage.react'

class Main extends React.Component {
    constructor () {
        super();
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        axios.get('https://alex-test-autotelic.herokuapp.com/messages/')
            .then((response) => {
                this.setState({messages: response.data.results})
            })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.messages.map(function (message) {
                        return (
                            <MessagesPage key={message.id} data={message} />
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default Main;
