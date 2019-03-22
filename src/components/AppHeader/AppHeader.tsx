import * as React from 'react';
import { connect } from 'react-redux';
import './AppHeader.scss';

class AppHeader extends React.Component<IProps> {
    public render():JSX.Element {
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
                                'Now answer the test and get your mark.':
                                `Words: ${this.props.words}`
                        }
                    </p>

                    {this.props.mode === 'reading' ? <p>Found and unknown one? Select it to translate!</p> : null }

                </div>
        )
    }
}

interface IProps {
    mode: string;
    title: string;
    words: Array<Object>
    cards: Array<Object>
}

const mapStateToProps = (state):Object => {
    return {
        title: state.text.title,
        words: state.text.words,
        cards: state.wordCards,
    }
}

export default connect(mapStateToProps)(AppHeader);