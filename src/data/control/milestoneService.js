import allEvents from '../gameData/events';

// events are milestones that modify the game state in arbitrary ways
// every step of the game this function checks to see which milestones should
// occur this step and

export default function calculateMilestones(gameData){
    const events = getEvents(allEvents, gameData);
    events.forEach((event) => {
        event.action(gameData);
    })
}

function getEvents(events, gameData){
    return events.filter(step => step.test(gameData));
}
