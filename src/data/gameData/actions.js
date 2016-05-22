
const actions = [
    {
        label: 'Build Factory',
        cost: '2 Energy',
        fn: (data) => {
            data.facilities.factories += 1;
            data.resources.energy -= 2;
            data.messages.push({
                color: 'black',
                text: 'A new factory has been constructed'
            })
        },
        test: (data) => true,
        isActive: (data) => (data.resources.energy > 1)
    }
]

export default actions;
