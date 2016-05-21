import allSteps from '../steps';

export default function calculateMilestones(store){
    const steps = getSteps(allSteps, store);
    steps.forEach((step) => {
        step.action(store);
    })
}

function getSteps(steps, store){
    var result = [];
    for(var i = 0; i < steps.length; i++){
        if(steps[i].test(store)){
            result.push(steps[i]);
        }
    }
    return result;
}
