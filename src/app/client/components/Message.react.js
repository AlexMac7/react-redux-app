import * as React from 'react';
import axios from "axios/index";

class Message extends React.Component {
    constructor () {
        super();
        this.state = {
            message: []
        }
    }

    componentDidMount() {
        axios.get(`https://alex-test-autotelic.herokuapp.com/messages/${this.props.params.messageId}`)
            .then((response) => {
                this.setState({message: response.data})
            })
    }

    render() {
        const { id, text, author, created_at, updated_at } = this.state.message;
        return (
            <div>
                <p>Id: {id}</p>
                <p>Text: {text}</p>
                <p>Author: {author}</p>
                <p>Created At: {created_at}</p>
                <p>Updated At: {updated_at}</p>
            </div>
        );
    }
}

export default Message;
