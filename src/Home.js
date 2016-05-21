import React from 'react';
import PlayerStats from './playerStats/PlayerStats';
import BattleControl from './battleControl/BattleControl';
import Messages from './messages/Messages';
import Control from './control/Control';
import Title from './Title';
import './home.css';

export default React.createClass({
    render() {
        const gameState = this.props.store.data.gameState;
        return (
            <div className="main">
                <Title mission={this.props.store.data.mission}/>
                <PlayerStats
                    data={this.props.store.data}
                />
                <Messages
                    data={this.props.store.data}
                />
                {
                    gameState === 'battle'
                        ? <BattleControl store={this.props.store}/>
                            : <Control store={this.props.store}/>
                }
            </div>
        )
    }
})
