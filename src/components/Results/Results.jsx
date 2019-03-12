import React from 'react';
import { connect } from 'react-redux';
import './Results.scss';

const Results = (props) => {
    if (Object.keys(props.translation).length === 0) {
        return <div className='reading-trainer__results'>Start by reading a text and translating unknown words</div>
    } else if (props.mark === undefined) {
        return <div className='reading-trainer__results'></div>
    } else {
        const markClass = `reading-trainer__mark ${props.mark >= 7 ? 'good' : props.mark >= 4 ? 'normal' : 'bad' }`;
        return (<div className='reading-trainer__results'>
            You answered right {props.corrects} out of {props.totalFields}.<br/>
            <span className={markClass}>{props.mark} points</span></div>
        );
    }
}

const mapStateToProps = ({result, translation}) => {
    return {
        mark: result.mark,
        corrects: result.corrects,
        totalFields: result.totalFields,
        translation: translation
    }
}

export default connect(mapStateToProps, {})(Results);