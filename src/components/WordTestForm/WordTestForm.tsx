import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { Redirect } from 'react-router-dom';
import { submitCheckResult } from '../../actions'
import './WordTestForm.scss';
import RenderForm from './RenderForm';

const MAX_FIELDS : number = 10;
const MAX_MARK : number = 10;

class WordTestForm extends React.Component<IProps> {
    
    public renderFormWordCards = ():JSX.Element[] => {
        return Object.keys(this.props.translation)
            .map((word : string, i : number) => {
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

    public onSubmit = (formValues : Object):void => {
        let corrects : number = 0;
        const totalFields : number = Object.keys(this.props.translation).length <= MAX_FIELDS ? Object.keys(this.props.translation).length : MAX_FIELDS;
        Object.keys(this.props.translation).map((el : string, i : number) => {
            if (i < totalFields) {
                const inputCard : HTMLDivElement = this[el].getRenderedComponent()[el];
                const inputCard_input : HTMLInputElement = this[el].getRenderedComponent()[`${el}_input`];
                inputCard.classList.add('solved');
                inputCard_input.disabled = true;
                console.log(formValues);
                if (formValues[el] && formValues[el].toLowerCase() === this.props.translation[el].toLowerCase()) {
                    inputCard.classList.add('correct')
                    corrects += 1;
                } else {
                    inputCard.classList.add('wrong')
                    inputCard_input.value += ` (${this.props.translation[el]})`;
                }
            }
        });
        const mark : number = Math.round((corrects/totalFields) * MAX_MARK);
        this.props.submitCheckResult({
            mark,
            corrects,
            totalFields
        });
    }

    public render():JSX.Element {
        const renderBlock : JSX.Element = (
            <div className='reading-trainer__form'>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    {this.renderFormWordCards()}
                    {Object.keys(this.props.result).length === 0 && <button className='reading-trainer__submit'>Check</button>}
                </form>
            </div>
        );
        return Object.keys(this.props.translation).length > 0 ? renderBlock : <Redirect to="/"/>;
    }
}

const mapStateToProps = (state):Object => {
    return {
        translation: state.translation,
        result: state.result
    }
}

interface IProps {
    handleSubmit: Function;
    submitCheckResult: Function;
    translation: Object;
    result: Object;
}

const WordTestFormConnected = connect(mapStateToProps, { submitCheckResult })(WordTestForm);

export default reduxForm({ form: 'wordTestForm' })(WordTestFormConnected)