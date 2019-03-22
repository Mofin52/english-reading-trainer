import * as React from 'react';
import { connect } from 'react-redux';
import { registerWordCard } from '../../actions';
import './WordCard.scss';

const WordCard:Function = (props:IProps):JSX.Element => {
    const ref = React.createRef<HTMLDivElement>();
    
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

interface IProps {
    registerWordCard: Function;
    word: string;
    translation: string;
}

export default connect(null, { registerWordCard })(WordCard);