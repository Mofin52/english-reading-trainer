import * as React from 'react';
import './SideNotes.scss';
import WordCard from '../WordCard/WordCard';
import { connect } from 'react-redux';

class SideNotes extends React.Component<IProps> {
    
    public renderCardsList():JSX.Element[] {
        return Object.keys(this.props.cards)
            .map((word) => {
                return <WordCard
                    className='basic'
                    word={word}
                    translation={this.props.cards[word]}
                    key={word}
                />
            });
    }

    public render():JSX.Element {
        return (
            <div className='reading-trainer__sidenotes'>
                {this.renderCardsList()}
            </div>
        );
    }
}

interface IProps {
    cards: Object
}

const mapStateToProps = (state):Object => {
    return {
        cards: state.translation,
    }
}


export default connect(mapStateToProps)(SideNotes);