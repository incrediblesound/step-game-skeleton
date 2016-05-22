import React from 'react';
import './title.css';

export default React.createClass({
    _saveGame(){
        const gameState = {
            data: this.props.store.data
        }
        const key = prompt('Enter a name for your saved game.');
        if(key.length){
            localStorage.setItem(key, JSON.stringify(gameState));
        } else {
            alert('That is an invalid name.');
        }
    },
    _loadGame(){
        const key = prompt('What is the name of your saved game?');
        if(key.length){
            const gameState = localStorage.getItem(key);
            if(gameState){
                this.props.store.resetGame(JSON.parse(gameState));
            } else {
                alert('I couldn\'t find a game with the name "'+key+'"');
            }
        } else {
            alert('That is an invalid name.');
        }
    },
    render() {
        return (
            <div className="title">
                <h2>Game</h2>
                <p> | Mission: {this.props.store.data.mission}</p>
                <div className="title-right">
                    <span onClick={this._saveGame}>Save</span>
                    <span onClick={this._loadGame}> | Load</span>
                </div>
            </div>
        )
    }
})
