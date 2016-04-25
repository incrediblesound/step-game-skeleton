import { raider } from '../units';

export default function calculateMilestones(store){
    const data = store.data;
    if(data.step == 5){
        data.gameState = 'battle';
        data.enemyForce = [ raider, raider, raider ]
    }
}
