import React from 'react';
import Stat from './Stat';
import './playerstats.css';

export default React.createClass({
    render() {
        const data = this.props.data;
        return (
            <div className="player-stats">
                <h2>Facilities</h2>
                <Stat label="Factories">
                    {data.facilities.factories}
                </Stat>
                <h2>Resources</h2>
                <Stat label="Machines">
                    {data.resources.machines}
                </Stat>
                <Stat label="Energy">
                    {data.resources.energy}
                </Stat>
            </div>
        )
    }
})
