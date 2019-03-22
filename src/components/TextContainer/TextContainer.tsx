import * as React from 'react';
import { connect } from 'react-redux';
import { loadText, translateSelection } from '../../actions';
import './TextContainer.scss';

class TextContainer extends React.Component<IProps> {

    public componentDidMount():void {
        if (this.props.text.length === 0) {
            this.props.loadText();
        }
    }

    public handleTextSelection = ():void => {
        const selection : string = window.getSelection().toString().replace(/[.',\/#!?$%\^&\*;:{}=\-_`~()“”"]/g,"");
        if (selection && selection.length) {
            selection
                .split(" ")
                .filter((el:string) => el.length)
                .map((word:string) => {
                        if (this.props.translation[word] !== undefined) {
                            this.props.wordCards[word].current.classList.add('repeat');
                        } else {
                            this.props.translateSelection(word)
                        }
                    }
                );
        }
    }

    public renderText():JSX.Element[] {
        if (this.props.text.length) {
            return this.props.text.map(el =>
                <p key={el.slice(0, 15)}>{el}</p>
            );
        }
    }

    public render():JSX.Element {
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

const mapStateToProps = (state):Object => {
    return {
        text: state.text.text,
        translation: state.translation,
        wordCards: state.wordCards,
    }
}

interface IProps {
    text: Array<string>;
    translation: Object;
    wordCards: Object;
    loadText: Function;
    translateSelection: Function;
}

export default connect(mapStateToProps, { loadText, translateSelection })(TextContainer);