export default (state = {test: 'test'}, action) => {
    switch(action.type) {
        case 'TRANSLATE_SELECTION':
            if(state[action.payload.selectedText] !== undefined) {
                return state;
            } else {
                return {
                    ...state,
                    [action.payload.selectedText]: action.payload.translation
                };

            }
        default:
            return state;
    }
}