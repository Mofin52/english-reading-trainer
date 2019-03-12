import React from 'react';
import { connect } from 'react-redux';
import './WordTestForm.scss';
import WordCard from '../WordCard/WordCard';

const randomNum = Math.random();

class WordTestForm extends React.Component {

    renderFormWordCards = () => {
        return Object.keys(this.props.translation)
            .sort(() => {
                return Math.random() - 0.5
            })
            .map((word, i) => {
                if (i < 10) {
                    return <WordCard
                        word={word}
                        withInput={true}
                        key={randomNum * 23 * (i + 1)}
                    /> 
                }
            });
    }

    render() {
        return (
            <div className='reading-trainer__form'>
                {this.renderFormWordCards()}
                <button className='reading-trainer__submit'>Check</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        translation: state.translation
    }
}

export default connect(mapStateToProps, {})(WordTestForm);