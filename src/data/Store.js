import gameData from './gameData';
import calculateMilestones from './control/milestoneService';
import advancePlayerStats from './control/advanceStats';
import { battleAction } from './control/battleAction';

class Store {
    constructor(){
        this.callbacks = [];
        this.nextActions = [];
        this.messages = [];
        this.data = gameData;
        this.doBattleAction = battleAction;
    }
    onUpdate(cb){
        this.callbacks.push(cb)
    }
    update(){
        this.callbacks.forEach(cb => {
            cb();
        })
    }
    doNext(){
        const action = this.nextActions.shift();
        action(this);
    }
    doAction(action){
        this.data.messages = [];
        this.data.step += 1;
        action.fn(this.data);
        advancePlayerStats(this);
        if(this.nextActions.length){
            this.doNext();
        } else {
            calculateMilestones(this);
            this.update();
        }
    }
}

export default new Store();
