import React from 'react';
import { connect } from 'react-redux';
import { loadText, translateSelection } from '../../actions';
import './TextContainer.scss';

class TextContainer extends React.Component {

    componentDidMount() {
        if (this.props.text.length === 0) {
            this.props.loadText();
        }
    }

    handleTextSelection = () => {
        const selection = window.getSelection().toString().replace(/[.',\/#!?$%\^&\*;:{}=\-_`~()“”"]/g,"");
        if (selection && selection.length) {
            selection
                .split(" ")
                .filter(el => el.length)
                .map(
                    word => {
                        if (this.props.translation[word] !== undefined) {
                            this.props.wordCards[word].current.classList.add('repeat');
                        } else {
                            this.props.translateSelection(word)
                        }
                    }
                );
        }
    }

    renderText() {
        if (this.props.text.length) {
            return this.props.text.map(el =>
                <p key={el.slice(0, 15)}>{el}</p>
            );
        }
    }

    render() {
        return(
            <div
                className='reading-trainer__text-container'
                onMouseUp={this.handleTextSelection}
            >
                {this.renderText()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.text.text,
        translation: state.translation,
        wordCards: state.wordCards
    }
};

export default connect(mapStateToProps, { loadText, translateSelection })(TextContainer);