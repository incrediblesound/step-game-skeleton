import React from 'react';
import PlayerStats from './playerStats/PlayerStats';
import Messages from './messages/Messages';
import ControlPanel from './controlPanel/ControlPanel';
import Title from './Title';
import './home.css';

export default React.createClass({
    render() {
        const data = this.props.store.data;
        return (
            <div className="main">
                <Title store={this.props.store}/>
                <PlayerStats data={data} />
                <Messages data={data} />
                <ControlPanel store={this.props.store}/>
            </div>
        )
    }
})
