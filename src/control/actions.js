
const actions = {
    basic: [
        {
            label: 'Dig Mine',
            cost: '2 Energy',
            fn: (data) => {
                data.facilities.mines += 1;
                data.resources.energy -= 2;
                data.messages.unshift({
                    color: 'blue',
                    text: 'A new mine has been constructed'
                })
            },
            isActive: (data) => (data.resources.energy > 1)
        },
        {
            label: 'Build Reactor',
            cost: '5 Ore',
            fn: (data) => {
                data.facilities.reactors += 1;
                data.resources.ore -= 3;
                data.messages.unshift({
                    color: 'blue',
                    text: 'A new reactor has been constructed'
                })
            },
            isActive: (data) => (data.resources.ore > 4)
        },
        {
            label: 'Build Lancer',
            cost: '3 Ore',
            fn: (data) => {
                data.resources.ore -= 3;
                data.forces.lancers += 1;
                data.messages.unshift({
                    color: 'blue',
                    text: 'A new lancer drone has been constructed'
                })
            },
            isActive: (data) => (data.resources.ore > 2)
        }
    ]
}

export default actions;
