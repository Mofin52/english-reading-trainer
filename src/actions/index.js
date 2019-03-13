import translator from '../apis/yandexTranslate';
import litipsum from '../apis/litipsum';

export const translateSelection = (selectedText) => async (dispatch) => {
    const response = await translator.get('', {
        params: {
            text: selectedText
        }
    });
    dispatch({
        type: 'TRANSLATE_SELECTION',
        payload: {
            selectedText: selectedText, 
            translation: response.data.text[0].trim()
        }
    });
};

export const submitCheckResult = (results) => {
    return {
        type: 'SUBMIT_RESULT',
        payload: results
    }
}

export const registerWordCard = (wordCard) => {
    return {
        type: 'REGISTER_WORDCARD',
        payload: wordCard
    }
}

export const loadText = () => async (dispatch) => {
    const response = await litipsum.get('/5/json');
    dispatch({
        type: 'LOAD_TEXT',
        payload: response.data
    });
}


export const resetState = () => {
    return {
        type: 'RESET_STATE'
    }
}