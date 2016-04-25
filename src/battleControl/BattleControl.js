import React from 'react';
import Action from '../control/Action';
import { lancer } from '../data/units';

export default React.createClass({
    _doAction(action){
        return () => {
            this.props.store.doBattleAction(action);
        }
    },
    _getActions(){
        const units = [];
        const data = this.props.store.data;
        let lancers = 0;
        while(lancers < data.forces.lancers){
            units.push(lancer);
            lancers++;
        }
        return units.map((unit) => {
            return (
                <Action
                    isActive={()=>true}
                    onClick={this._doAction(unit)}>
                    {unit.label}
                </Action>
            )
        })
    },
    render() {
        return (
            <div className="control-panel">
                {this._getActions()}
            </div>
        )
    }
})
