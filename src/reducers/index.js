import { combineReducers } from 'redux';
import loadTextReducer from './loadTextReducer';
import translationReducer from './translationReducer';
import appPhaseReducer from './appPhaseReducer';
import wordCardsReducer from './wordCardsReducer';

export default combineReducers({
    text: loadTextReducer,
    translation: translationReducer,
    phase: appPhaseReducer,
    wordCards: wordCardsReducer
});