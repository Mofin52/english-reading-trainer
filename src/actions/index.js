export const translateSelection = (selectedText) => async (dispatch) => {
    const params= {
        key: 'trnsl.1.1.20190308T211558Z.49bf96bf6745f192.7c91c925ce95fabc97540b9fa542490116487453',
        lang: 'en-ru',
        format: 'plain',
    }

    fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${params.key}&lang=${params.lang}&format=${params.format}&text=${selectedText}`)
        .then((response) => {
            response.json().then((data) => {
                dispatch({
                    type: 'TRANSLATE_SELECTION',
                    payload: {
                        selectedText: selectedText, 
                        translation: data.text[0].trim()
                    }
                });
            });
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
    fetch('https://litipsum.com/api/5/json').then(response => {
        response.json().then(function(data) {
            dispatch({
                type: 'LOAD_TEXT',
                payload: data
            });
        });
    });
}


export const resetState = () => {
    return {
        type: 'RESET_STATE'
    }
}