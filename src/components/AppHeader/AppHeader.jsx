import React from 'react';
import Timer from '../Timer/Timer';
import './AppHeader.scss';
import {connect} from "react-redux";

class AppHeader extends React.Component {

    render() {
        return (
            <div className='reading-trainer__header'>
                <h1>English Reading Trainer{this.props.mode === 'testing' ? ' - Test' : ''}</h1>

                <p>
                    {
                        this.props.mode === 'testing' ?
                            `Do you remember all words, you've translated from "${this.props.title}" page?` :
                            `You\'re reading a page from "${this.props.title}"`
                    }
                </p>

                <p>
                    {
                        this.props.mode === 'testing' ?
                            'Now answer the test and get your mark.' :
                            `Words: ${this.props.words}`
                    }
                </p>

                {this.props.mode === 'reading' ? <p>Found and unknown one? Select it to translate!</p> : null}

                {
                    this.props.mode === 'testing' ?
                        !!this.props.result.endTestingDate ? null :
                            <Timer startDate={this.props.result.startTestingDate}/> :
                        <Timer startDate={this.props.result.startReadingDate}/>
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.text.title,
        words: state.text.words,
        cards: state.wordCards,
        result: state.result
    }
}

export default connect(mapStateToProps)(AppHeader);