import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import i18n from "i18next";

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {locale: {value: 'ru'}}, applyMiddleware(thunk));

i18n.init({
    lng: 'en',
    resources: {
        'en': {
            translation: {
                'header': 'English Reading Trainer',
                'key': 'Do you remember all words, you\'ve translated from ',
                'header_t': 'English Reading Trainer - Test',
                "key2": " page?",
                "key3": "You\'re reading a page from ",
                'key4': "Now answer the test and get your mark.",
                'key5': "Words: ",
                'key6': "Found and unknown one? Select it to translate",
            }
        },
        'ru': {
            translation: {
                'header': 'Программа тренировки навыков чтения на английском языке',
                'header_t': 'Программа тренировки навыков чтения на английском языке - Тест',
                'key': 'Вы помните все слова, переведённые из ',
                'key1.5': '- Тест',
                'key2': ' текста?',
                'key3': 'Вы читаете открывок из книги ',
                'key4': "А теперь решите тест и получите оценку.",
                'key5': "Кол-во слов:",
                'key6': "Видишь незнакомое слово? Выдели его для перевода",
            }
        }
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);