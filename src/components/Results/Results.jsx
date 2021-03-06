import React from 'react';
import { connect } from 'react-redux';
import './Results.scss';

const Results = (props) => {
        const markClass = `reading-trainer__mark ${props.mark >= 7 ? 'good' : props.mark >= 4 ? 'normal' : 'bad' }`;
        
        const renderBlock = (
            <div className='reading-trainer__results'>
                You answered right {props.corrects} out of {props.totalFields}.
               <br/>
               <span className={markClass}>
                    {props.mark} points
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
        translation: translation
    }
}

export default connect(mapStateToProps, {})(Results);