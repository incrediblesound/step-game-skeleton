import React from 'react';

export default React.createClass({
    render() {
        return (
            <div className="title">
                <h2>Game</h2>
                <p> | Mission: {this.props.mission}</p>
            </div>
        )
    }
})
