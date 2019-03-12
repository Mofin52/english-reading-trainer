export default (state = {}, action) => {
    switch(action.type) {
        case 'SUBMIT_RESULT':
            return action.payload;
        default:
            return state;
    }
}