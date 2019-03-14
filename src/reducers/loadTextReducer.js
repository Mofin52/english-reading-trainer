export default (state = {
    text: [],
    title: '',
    words: 0
}, action) => {
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