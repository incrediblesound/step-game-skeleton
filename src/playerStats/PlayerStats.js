import React from 'react';
import Stat from './Stat';
import './playerstats.css';

export default React.createClass({
    render() {
        const data = this.props.data;
        return (
            <div className="player-stats">
                <h2>Institutions</h2>
                <Stat label="Technology Institute">
                    {data.player.technology}
                </Stat>
                <Stat label="Military Research">
                    {data.player.military}
                </Stat>
                <Stat label="College of Diplomacy">
                    {data.player.diplomacy}
                </Stat>
                <h2>Forces</h2>
                <Stat label="Long Range Missiles">
                    {data.forces.longRange}
                </Stat>
                <Stat label="Lancer Ships">
                    {data.forces.lancers}
                </Stat>
                <h2>Facilities</h2>
                <Stat label="Mines">
                    {data.facilities.mines}
                </Stat>
                <Stat label="Reactors">
                    {data.facilities.reactors}
                </Stat>
                <h2>Resources</h2>
                <Stat label="Ore">
                    {data.resources.ore}
                </Stat>
                <Stat label="Energy">
                    {data.resources.energy}
                </Stat>
            </div>
        )
    }
})
