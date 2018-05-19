import * as React from 'react';

class Message extends React.Component {
    render() {
        const { text, created_at } = this.props.data;
        return (
            <li className={'message'}>
                <p>{created_at}</p>
                <p>{text}</p>
            </li>
        )
    }
}

export default Message;
