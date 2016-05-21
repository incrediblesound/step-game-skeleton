import React from 'react';
import './messages.css';

export default React.createClass({
    _getEnemyForces(){
        return this.props.data.enemyForce.map((unit) => {
            return (
                <div className="unit">
                    <h3>
                        {unit.label}
                    </h3>
                </div>
            )
        })
    },
    render() {
        const data = this.props.data;
        return (
            <div className="battle-messages">
                <h2>Enemy Forces</h2>
                {this._getEnemyForces()}
            </div>
        )
    }
})
