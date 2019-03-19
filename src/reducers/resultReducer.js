export default (state = {
    startReadingDate: null,
    endReadingDate: null,
    startTestingDate: null,
    endTestingDate: null,
    totalTime: 0
}, action) => {
    switch (action.type) {
        case 'SUBMIT_RESULT':
            return {
                ...state,
                ...action.payload
            };
        case 'SAVE_DATE':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}