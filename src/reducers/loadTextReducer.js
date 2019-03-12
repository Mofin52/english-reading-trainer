export default (state = {}, action) => {
    switch(action.type) {
        case 'LOAD_TEXT':
            return {
                text: action.payload.text,
                title: action.payload.title,
                words: action.payload.text.join('').split(' ').length
            };
        default:
            return state;
    }
}