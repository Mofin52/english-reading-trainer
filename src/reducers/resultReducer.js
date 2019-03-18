export default (state = {
    testSubmitted: false,
    time: 0
}, action) => {
    switch (action.type) {
        case 'SUBMIT_RESULT':
            return {
                ...state,
                ...action.payload,
                testSubmitted: true
            };
        case 'SAVE_TIME':
            console.log(state);
            console.log(action);
            let time = state.time += action.payload.time;
            return {
                ...state,
                time
            };
        default:
            return state;
    }
}