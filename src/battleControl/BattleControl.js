import React from 'react';
import Action from '../control/Action';
import { lancer } from '../data/units';
import BattleAction from './BattleAction';
import './battle.css';

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
            units.push(lancer());
            lancers++;
        }
        return units.map((unit) => {
            return (
                <BattleAction
                    unit={unit}
                    onClick={this._doAction(unit)}/>
                )
                })
    },
    render() {
        return (
            <div className="control-panel battle-panel">
                <h2>Available Forces</h2>
                {this._getActions()}
            </div>
        )
    }
})
