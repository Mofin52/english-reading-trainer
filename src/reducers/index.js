import { combineReducers } from 'redux';
import loadTextReducer from './loadTextReducer';
import translationReducer from './translationReducer';
import appPhaseReducer from './appPhaseReducer';

export default combineReducers({
    text: loadTextReducer,
    translation: translationReducer,
    phase: appPhaseReducer
});