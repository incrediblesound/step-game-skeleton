import React from 'react';
import PlayerStats from '../playerStats/PlayerStats';
import Messages from '../messages/Messages';
import ControlPanel from '../controlPanel/ControlPanel';
import Title from './Title';
import LoseGameScreen from './LoseGameScreen';
import './home.css';

export default React.createClass({
    _getGameScreen(){
        const mode = this.props.store.data.mode;
        const data = this.props.store.data;

        if(mode === 'main'){
            return (
                <div>
                    <PlayerStats data={data} />
                    <Messages data={data} />
                    <ControlPanel store={this.props.store}/>
                </div>
            )
        }
        else if(mode === 'lost'){
            return (
                <LoseGameScreen store={this.props.store}/>
            )
        }
    },
    render() {
        return (
            <div className='main'>
                <Title store={this.props.store}/>
                {this._getGameScreen()}
            </div>
        )
    }
})
