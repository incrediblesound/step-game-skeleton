
export default function advancePlayerStats(gameData){
    // update player stats
    // here you can calulate things like increase in resources
    // based on the number of resource producing facilities
    // and increases in population etc
    // this example adds up to three machines for each factory
    for(let i = 0; i < gameData.facilities.factories; i++){
        gameData.resources.machines += rnd(3);
    }
}

function rnd(n){
    return Math.floor(Math.random()*n)+1;
}
