import React from 'react';

export default (state = {}, action) => {
    switch(action.type) {
        case 'LOAD_TEXT':
            return {
                text: action.payload.text.map(el => <p key={new Date().getTime() * Math.random()}>{el}</p>),
                title: action.payload.title,
                words: action.payload.text.join('').split(' ').length
            };
        default:
            return state;
    }
}