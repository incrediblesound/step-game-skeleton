import React from 'react';

export default React.createClass({
    render() {
        var buttonClass = `action-button ${this.props.isActive ? '':'inactive'}`;
        var costClass = this.props.isActive ? 'action-cost' : 'not-enough'
        return (
            <div className="action">
                <div className="action-info">
                    <p className="action-label">{this.props.action.label}</p>
                    <p className={costClass}>{this.props.action.cost}</p>
                </div>
                <div className={buttonClass}>
                    {
                        this.props.isActive ?
                            <button onClick={this.props.onClick}>Do Action</button>
                        : false
                    }
                </div>
            </div>
        )
    }
})
