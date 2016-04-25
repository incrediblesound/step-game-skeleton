import React from 'react';

export default React.createClass({
    render() {
        if(!this.props.isActive){
            return (
                <div className="action inactive">
                    <button>{this.props.children}</button>
                </div>
            )
        }
        return (
            <div className="action">
                <button onClick={this.props.onClick}>{this.props.children}</button>
            </div>
        )
    }
})
