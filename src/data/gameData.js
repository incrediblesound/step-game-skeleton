export default {
    step: 0,
    mission: 'Build up your resources to improve your facilities',
    player: {
        technology: 1,
        military: 1,
        diplomacy: 1
    },
    forces: {
        longRange: 0,
        lancers: 2
    },
    resources: {
        ore: 1,
        energy: 15
    },
    facilities: {
        mines: 0,
        reactors: 1
    },
    currentAction: [],
    messages: [{
        color: 'black',
        text: `Your small city lacks infrastructure.
        You only have a few drones to defend yourself from the Troxians.
        You must develop your resources and infrastructure in order to be capable
        of defense and exploration.`
    }],
    actions: ['basic'],
    gameState: null,
    enemyForce: null
}
