import React from 'react';

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
            <div>
                {this._getEnemyForces()}
            </div>
        )
    }
})
