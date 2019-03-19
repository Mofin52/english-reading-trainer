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
        case 'SAVE_START_READING_DATE':
            return {
                ...state,
                startReadingDate: action.payload.date
            };
        case 'SAVE_END_READING_DATE':
            return {
                ...state,
                endReadingDate: action.payload.date
            };
        case 'SAVE_START_TESTING_DATE':
            return {
                ...state,
                startTestingDate: action.payload.date
            };
        case 'SAVE_END_TESTING_DATE':
            return {
                ...state,
                endTestingDate: action.payload.date
            };
        default:
            return state;
    }
}