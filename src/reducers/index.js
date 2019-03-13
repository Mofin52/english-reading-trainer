import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loadTextReducer from './loadTextReducer';
import translationReducer from './translationReducer';
import wordCardsReducer from './wordCardsReducer';
import resultReducer from './resultReducer';

const appReducer = combineReducers({
    text: loadTextReducer,
    translation: translationReducer,
    wordCards: wordCardsReducer,
    form: formReducer,
    result: resultReducer
})
  
const rootReducer = (state, action) => {
    if (action.type === 'RESET_STATE') {
      state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer;