import * as React from 'react';
import LinkItem from './LinkItem.react';
import { Link } from 'found';

class MessagesPage extends React.Component {
    render() {
        const { text, created_at } = this.props.data;
        return (
            <li className={'message'}>
                <p>{created_at}</p>
                <p>{text}</p>
                <Link to={`messages/${this.props.data.id}`}>
                    Show Message
                </Link>
            </li>
        )
    }
}

export default MessagesPage;
