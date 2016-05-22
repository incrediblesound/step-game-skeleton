import gameData from './gameData/gameData';
import calculateMilestones from './control/milestoneService';
import advancePlayerStats from './control/advanceStats';

class Store {
    constructor(){
        this.callbacks = [];
        this.messages = [];
        this.data = gameData;
    }
    onUpdate(cb){
        this.callbacks.push(cb)
    }
    update(){
        this.callbacks.forEach(cb => {
            cb();
        })
    }
    doAction(action){
        this.data.messages = [];
        this.data.step += 1;

        // execute the action function
        action.fn(this.data);
        // advance the players stats accordingly
        advancePlayerStats(this.data);
        // check if there are any milestone events
        calculateMilestones(this.data);
        // update the game UI to reflect new game state
        this.update();
    }
    resetGame(gameState){
        this.data = gameState.data;
        this.data.messages.push({
            color: 'green',
            text: 'Game successfully loaded'
        })
        this.update();
    }
}

export default new Store();
