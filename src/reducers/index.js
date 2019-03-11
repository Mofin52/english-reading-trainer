import { combineReducers } from 'redux';
import loadTextReducer from './loadTextReducer';
import translationReducer from './translationReducer';

export default combineReducers({
    text: loadTextReducer,
    translation: translationReducer,
});