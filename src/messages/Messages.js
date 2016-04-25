import React from 'react';
import BattleView from './BattleView';

export default React.createClass({
    render() {
        const data = this.props.data;
        return (
            <div className="message-panel">
                { data.gameState === 'battle' ?
                    <BattleView data={this.props.data}/>
                    : false
                }
            </div>
        )
    }
})
