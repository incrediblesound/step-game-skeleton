import React from 'react';
import actions from '../data/gameData/actions';
import Action from './Action';
import './control.css';

export default React.createClass({
    _doAction(action){
        return () => {
            this.props.store.doAction(action);
        }
    },
    _getActions(){
        const data = this.props.store.data;
        // each possible action checks the game state to see if it is available
        // to the player
        let availableActions = actions.filter((action) => action.test(data));

        return availableActions.map((action) => {
            return (
                <Action
                    isActive={action.isActive(this.props.store.data)}
                    onClick={this._doAction(action)}
                    action={action}
                />
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
