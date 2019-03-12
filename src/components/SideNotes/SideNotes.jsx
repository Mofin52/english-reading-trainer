import React from 'react';
import './SideNotes.scss';
import WordCard from '../WordCard/WordCard';
import { connect } from 'react-redux';

const randomNum = Math.random();

class SideNotes extends React.Component {
    
    renderCardsList() {
        return Object.keys(this.props.cards)
            .map((word, i) => {
                return <WordCard
                    className='testytest'
                    word={word}
                    translation={this.props.cards[word]}
                    key={randomNum * 17 * (i + 1)}
                />
            });
    }

    render() {
        return (
            <div className='reading-trainer__sidenotes'>
                {this.renderCardsList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.translation,
    }
}


export default connect(mapStateToProps)(SideNotes);