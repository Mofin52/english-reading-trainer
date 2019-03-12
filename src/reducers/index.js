import { combineReducers } from 'redux';
import loadTextReducer from './loadTextReducer';
import translationReducer from './translationReducer';
import wordCardsReducer from './wordCardsReducer';

export default combineReducers({
    text: loadTextReducer,
    translation: translationReducer,
    wordCards: wordCardsReducer
});