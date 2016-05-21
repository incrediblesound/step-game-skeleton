export function battleAction(action){
    const enemyForce = this.data.enemyForce;
    const enemyUnit = enemyForce[rnd(enemyForce.length)];
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

function rnd(n){
    return Math.floor(Math.random() * n);
}
