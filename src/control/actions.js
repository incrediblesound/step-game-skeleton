
const actions = {
    basic: [
        {
            label: 'Dig Mine',
            fn: (store) => {
                store.data.facilities.mines += 1;
            },
            isActive: (store) => true
        },
        {
            label: 'Build Reactor',
            fn: (store) => {
                store.data.facilities.reactors += 1;
            },
            isActive: (store) => true
        },
        {
            label: 'Build Lancer',
            fn: (store) => {
                store.data.resources.ore -= 5;
                store.data.forces.lancers += 1;
            },
            isActive: (store) => (store.data.resources.ore > 4)
        }
    ]
}

export default actions;
