import gameData from './gameData';
import showMessages from './control/messageService';
import calculateMilestones from './control/milestoneService';
import advancePlayerStats from './control/advanceStats';

class Store {
    constructor(){
        this.callbacks = [];
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
        this.data.step += 1;
        action.fn(this);
        calculateMilestones(this);
        advancePlayerStats(this);
        showMessages(this);
        this.update();
    }
    doBattleAction(action){
        debugger;
        this.data.enemyForce[0].life -= action.attack;
        this.data.enemyForce = this.data.enemyForce.filter((unit) => {
            return unit.life > 0;
        });
        if(this.data.enemyForce.length < 1){
            this.data.gameState = null;
            this.data.enemyForce = null;
            this.data.step += 1;
        }
        this.update();
    }
}

export default new Store();
