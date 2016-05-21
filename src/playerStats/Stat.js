import React from 'react';

export default React.createClass({
    render() {
        return (
            <div className="stat">
                <span><strong>{this.props.label}: </strong></span>
                <input value={this.props.children} disabled={true}/>
            </div>
        )
    }
})
