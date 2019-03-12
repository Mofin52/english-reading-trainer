export default (state = {}, action) => {
    switch(action.type) {
        case 'REGISTER_WORDCARD':
            return {...state, [action.payload.word]: action.payload.dom}
        default:
            return state;
    }
}