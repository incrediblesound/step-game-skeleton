
export default function advancePlayerStats(gameData){
    // update player stats
    // here you can calulate things like increase in resources
    // based on the number of resource producing facilities
    // and increases in population etc
    // this example adds up to three machines for each factory
    // and checks the energy resource for the lose condition
    for(let i = 0; i < gameData.facilities.factories; i++){
        gameData.resources.machines += rnd(3);
    }
    if(gameData.resources.energy < 1){
        gameData.mode = 'lost';
    }
}

function rnd(n){
    return Math.floor(Math.random()*n)+1;
}
