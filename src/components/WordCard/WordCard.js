import React from 'react';
import './WordCard.scss';

const WordCard = (props) => {
    return (
        <div className='reading-trainer__card'>
            <p className='word'>{props.word}</p>
            <p className='translation'>{props.translation}</p>
        </div>
    );
}

export default WordCard;