import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { Redirect } from 'react-router-dom';
import { submitCheckResult } from '../../actions'
import './WordTestForm.scss';
import RenderForm from './RenderForm';
import i18next from 'i18next';

const MAX_FIELDS = 10;
const MAX_MARK = 10;

class WordTestForm extends React.Component {
    setRef = elem => {
        this[this.props.label] = elem
    };
    
    renderFormWordCards = () => {
        return Object.keys(this.props.translation)
            .map((word, i) => {
                if (i < MAX_FIELDS) {
                    return <Field
                        label={word}
                        name={word}
                        ref={(node) => this[word] = node }
                        component={RenderForm}
                        forwardRef={true}
                        key={word}
                    /> 
                }
            });
    }

    onSubmit = (formValues) => {
        let corrects = 0;
        const totalFields = Object.keys(this.props.translation).length <= MAX_FIELDS ? Object.keys(this.props.translation).length : MAX_FIELDS;
        Object.keys(this.props.translation).map((el, i) => {
            if (i < totalFields) {
                console.log(this);
                const inputCard = this[el].getRenderedComponent()[el];
                const inputCard_input = this[el].getRenderedComponent()[`${el}_input`];
                inputCard.classList.add('solved');
                inputCard_input.disabled = true;
                if (formValues[el] && formValues[el].toLowerCase() === this.props.translation[el].toLowerCase()) {
                    inputCard.classList.add('correct')
                    corrects += 1;
                } else {
                    inputCard.classList.add('wrong')
                    inputCard_input.value += ` (${this.props.translation[el]})`;
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

    render() {
        const renderBlock = (
            <div className='reading-trainer__form'>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    {this.renderFormWordCards()}
                    <button className='reading-trainer__submit'>{(i18next.t('Check'))}</button>
                </form>
            </div>
        );
        return Object.keys(this.props.translation).length > 0 ? renderBlock : <Redirect to="/"/>;
    }
}

const mapStateToProps = (state) => {
    return {
        translation: state.translation
    }
}

WordTestForm = connect(mapStateToProps, { submitCheckResult })(WordTestForm);

export default reduxForm({ form: 'wordTestForm' })(WordTestForm)