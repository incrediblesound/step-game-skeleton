import React from 'react';
import './messages.css';

export default React.createClass({
    showMessages(){
        return this.props.data.messages.map((message, idx) => {
            return <p className="message-text">{message.text}</p>
        })
    },
    render() {
        const data = this.props.data;
        return (
            <div className="message-panel">
                {this.showMessages()}
            </div>
        )
    }
})
