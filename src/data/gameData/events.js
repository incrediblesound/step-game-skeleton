export default [
    {
        test: (data) => {
            return data.step === 2;
        },
        action: (data) => {
            data.messages.push({
                color: 'black',
                text: 'Here is a message that shows up on the second step.'
            });
        }
    }
]
