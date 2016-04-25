import React from 'react';
import actions from './actions';
import Action from './Action';
import './control.css';

export default React.createClass({
    _doAction(action){
        return () => {
            this.props.store.doAction(action);
        }
    },
    _getActions(){
        const availableActions = this.props.store.data.actions.reduce((prev, curr) => {
            const newPrev = prev.concat(actions[curr]);
            return newPrev;
        }, []);
        return availableActions.map((action) => {
            return (
                <Action
                    isActive={action.isActive(this.props.store)}
                    onClick={this._doAction(action)}
                >
                    {action.label}
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
