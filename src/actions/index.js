import translator from '../apis/yandexTranslate';
import litipsum from '../apis/litipsum';

export const translateSelection = (selectedText) => async (dispatch, getState) => {
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

export const loadText = () => async (dispatch, getState) => {
    const response = await litipsum.get('/5/json');
    dispatch({
        type: 'LOAD_TEXT',
        payload: response.data
    });
}