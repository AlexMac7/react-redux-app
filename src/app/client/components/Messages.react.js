import * as React from 'react';

class Messages extends React.Component {
    render() {
        return (
            <div>
                Messages
                {this.props.children}
            </div>
        )
    }
}

export default Messages;
