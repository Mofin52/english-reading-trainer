import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loadTextReducer from './loadTextReducer';
import translationReducer from './translationReducer';
import wordCardsReducer from './wordCardsReducer';
import resultReducer from './resultReducer';

export default combineReducers({
    text: loadTextReducer,
    translation: translationReducer,
    wordCards: wordCardsReducer,
    form: formReducer,
    result: resultReducer
});