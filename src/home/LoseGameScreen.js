import React from 'react';

export default React.createClass({
    _resetGame() {
        this.props.store.resetGame();
    },
    render() {
        return (
            <div className="lose-game">
                <h2>You ran out of energy!</h2>
                <button onClick={this._resetGame}>Start Over</button>
            </div>
        )
    }
})
