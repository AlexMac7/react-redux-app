import * as React from 'react';
import axios from "axios/index";

class Message extends React.Component {
    constructor () {
        super();
        this.state = {
            message: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        axios.get(`https://alex-test-autotelic.herokuapp.com/messages/${this.props.data.id}`)
            .then((response) => {
                console.log(response.data);
                this.setState({message: response.data})
            });
    }

    render() {
        // const { text, created_at } = this.props.data;
        return (
            <div className={'message'}>
                Hello World
                {/*<p>{created_at}</p>*/}
                {/*<p>{text}</p>*/}
                {/*<button onClick={this.handleClick}>Show Message</button>*/}
            </div>
        );
    }
}

export default Message;
