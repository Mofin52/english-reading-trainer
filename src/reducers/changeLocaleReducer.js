import { CHANGE_LOCALE } from '../constants/ActionTypes'

export default (state = {}, action) => {

    switch (action.type) {
        case CHANGE_LOCALE:
            return Object.assign({}, state, {value: state.value === 'ru' ? 'en' : 'ru'});
        default:
            return state;
    }
}