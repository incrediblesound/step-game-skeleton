
export default function advancePlayerStats(store){
    const data = store.data;
    store.data.resources.ore += Math.round((data.facilities.mines/2) + rnd(data.facilities.mines/2));
    store.data.resources.energy += store.data.facilities.reactors;
}


function rnd(n){
    return Math.floor(Math.random()*n);
}
