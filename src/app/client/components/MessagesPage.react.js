import * as React from 'react';
import LinkItem from './LinkItem.react';

class MessagesPage extends React.Component {
    render() {
        const { text, created_at } = this.props.data;
        return (
            <div className={'message'}>
                <p>Created At: {created_at}</p>
                <p>Text: {text}</p>
                <LinkItem to={`/messages/${this.props.data.id}`}>
                    View Message
                </LinkItem>
            </div>
        )
    }
}

export default MessagesPage;
