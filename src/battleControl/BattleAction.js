import React from 'react';

export default React.createClass({
    render(){
        return (
            <div className="battle-action">
                <div className="action-info">
                    <p>
                        Unit: {this.props.unit.label} <br/>
                        Life: {this.props.unit.life} <br/>
                        Attack: {this.props.unit.attack}
                    </p>
                </div>
                <div className="action-button">
                    <button onClick={this.props.onClick}>Attack</button>
                </div>
            </div>
        )
    }
})
