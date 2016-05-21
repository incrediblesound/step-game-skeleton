import { raider } from './units';

export default [
    {
        test: (store) => {
            return store.data.step === 4;
        },
        action: (store) => {
            store.data.messages.unshift({
                color: 'red',
                text: "Three Troxian raider drones have been spotted on the radar."
            });
        }
    },
    {
        test: (store) => {
            return store.data.step === 5;
        },
        action: (store) => {
            store.data.gameState = 'battle';
            store.data.enemyForce = [ raider(), raider(), raider() ];
        }
    }
]
