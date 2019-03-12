import React from 'react';
import { connect } from 'react-redux';
import './AppHeader.scss';

class AppHeader extends React.Component {
    render(){
        if (this.props.mode === 'reading') {
            return (
                <div className='reading-trainer__header'>
                    <h1>English Reading Trainer</h1>
                    <p>You're reading a page from "{this.props.title}"</p>
                    <p>Words: {this.props.words}</p>
                    <p>Found and unknown one? Select it to translate!</p>
                </div>
            )    
        }
        if (this.props.mode === 'testing') {
            if (!Object.keys(this.props.cards).length) {
                return (
                    <div className='reading-trainer__header'>
                        <h1>English Reading Trainer - Test</h1>
                        <p>Start by reading a text and translating unknown words</p>
                        <p>Then answer the test and get your mark.</p>
                    </div>
                )
            } else {
                return (
                    <div className='reading-trainer__header'>
                        <h1>English Reading Trainer - Test</h1>
                        <p>Do you remember all words, you've translated from "{this.props.title}" page?</p>
                        <p>Now answer the test and get your mark.</p>
                    </div>
                )
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.text.title,
        words: state.text.words,
        cards: state.wordCards,
    }
}

export default connect(mapStateToProps)(AppHeader);