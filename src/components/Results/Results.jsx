import React from 'react';
import { connect } from 'react-redux';
import './Results.scss';
import i18next from 'i18next';

const Results = (props) => {
        const markClass = `reading-trainer__mark ${props.mark >= 7 ? 'good' : props.mark >= 4 ? 'normal' : 'bad' }`;
        
        const renderBlock = (
            <div className='reading-trainer__results'>
                {(i18next.t('result1'))} {props.corrects} {(i18next.t('result2'))} {props.totalFields}.
               <br/>
               <span className={markClass}>
                    {props.mark} {(i18next.t('result3'))}
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