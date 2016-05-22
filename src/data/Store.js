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

        action.fn(this.data);

        advancePlayerStats(this.data);

        calculateMilestones(this.data);

        this.update();
    }
}

export default new Store();
