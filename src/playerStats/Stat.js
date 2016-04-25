import React from 'react';

export default React.createClass({
    render() {
        return (
            <div className="stat">
                <span><strong>{this.props.label}: </strong></span>
                - {this.props.children} -
            </div>
        )
    }
})
