import React from 'react';
import { connect } from 'react-redux';
import { registerWordCard } from '../../actions';
import './WordCard.scss';

const WordCard = (props) => {
    const ref = React.createRef();
    
    props.registerWordCard({
        dom: ref,
        word: props.word
    });
    
    return (
        <div className='reading-trainer__card' ref={ref}>
            <p className='word'>{props.word}</p>
            <p className='translation'>{props.translation}</p>
        </div>
    );
}

export default connect(null, { registerWordCard })(WordCard);