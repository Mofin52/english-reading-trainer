export default (state='READING_STATE', action) => {
    switch(action.type) {
        case 'SWITCH_STATE_TEST':
            return 'TEST_STATE';
        default:
            return state;
    }
}