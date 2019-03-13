import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { submitCheckResult } from '../../actions'
import './WordTestForm.scss';
import RenderForm from './RenderForm';

const randomNum = Math.random();
const MAX_MARK = 10;

class WordTestForm extends React.Component {

    renderFormWordCards = () => {
        return Object.keys(this.props.translation)
            .map((word, i) => {
                if (i < 10) {
                    return <Field
                        label={word}
                        name={word}
                        ref={word}
                        component={RenderForm}
                        forwardRef={true}
                        key={randomNum * 23 * (i + 1)}
                    /> 
                }
            });
    }

    onSubmit = (formValues) => {
        const numOfTranslations = Object.keys(this.props.translation).length;
        if (numOfTranslations > 0) {
            let corrects = 0;
            const totalFields = numOfTranslations <= 10 ? numOfTranslations : 10;
            Object.keys(this.props.translation).map((el, i) => {
                if (i < 10) {
                    const inputElement = this.refs[el].getRenderedComponent().refs[el];
                    inputElement.classList.add('solved');
                    inputElement.disabled = true;
                    if (formValues[el] && formValues[el].toLowerCase() === this.props.translation[el].toLowerCase()) {
                        inputElement.classList.add('correct')
                        corrects += 1;
                    } else {
                        inputElement.classList.add('wrong')
                        inputElement.value += ` (${this.props.translation[el]})`;
                    }
                }
            });
            const mark = Math.round((corrects/totalFields) * MAX_MARK);
            this.props.submitCheckResult({
                mark,
                corrects,
                totalFields
            });
        }
    }

    render() {
        //const submitClassName = `reading-trainer__submit`
        return (
            <div className='reading-trainer__form'>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    {this.renderFormWordCards()}
                    {Object.keys(this.props.translation).length > 0 ? <button className='reading-trainer__submit'>Check</button> : null }
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        translation: state.translation
    }
}

WordTestForm = connect(mapStateToProps, { submitCheckResult })(WordTestForm);

export default reduxForm({ form: 'wordTestForm' })(WordTestForm)