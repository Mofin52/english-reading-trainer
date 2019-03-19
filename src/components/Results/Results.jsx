import React from 'react';
import {connect} from 'react-redux';
import './Results.scss';

const Results = (props) => {
    const markClass = `reading-trainer__mark ${props.mark >= 7 ? 'good' : props.mark >= 4 ? 'normal' : 'bad'}`;
    const totalTime = !!props.result.endTestingDate ? Math.floor(
        (props.result.endReadingDate.getTime() -
            props.result.startReadingDate.getTime() +
            props.result.endTestingDate.getTime() -
            props.result.startTestingDate.getTime()) / 1000
    ) : null;

    const renderBlock = (
        <div className='reading-trainer__results'>
            You answered right {props.corrects} out of {props.totalFields}.
            <br/>
            <span className={markClass}>
                {props.mark} points
            </span>
            <br/>
            <span>
                Time: {totalTime}
            </span>
        </div>
    );

    return (
        props.mark !== undefined ? renderBlock : null
    )


}

const mapStateToProps = ({result, translation}) => {
    return {
        mark: result.mark,
        corrects: result.corrects,
        totalFields: result.totalFields,
        translation: translation,
        result: result
    }
}

export default connect(mapStateToProps, {})(Results);