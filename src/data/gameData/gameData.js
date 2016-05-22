export default function gameData(){
    return {
        step: 0,
        mode: 'main',
        mission: 'Build up your resources to improve your facilities',
        player: {
        },
        resources: {
            machines: 0,
            energy: 10
        },
        facilities: {
            factories: 0
        },
        currentAction: [],
        messages: [{
            color: 'black',
            text: `Your small city lacks infrastructure.`
        }]
    }
}
