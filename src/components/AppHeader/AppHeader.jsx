import React from 'react';
import { connect } from 'react-redux';
import './AppHeader.scss';

class AppHeader extends React.Component {
    render(){
        return (
            <div className='reading-trainer__header'>
                <h1>English Reading Trainer</h1>
                <p>You're reading a page from "{this.props.title}"</p>
                <p>Words: {this.props.words}</p>
                <p>Found and unknown one? Select it to translate!</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.text.title,
        words: state.text.words
    }
}

export default connect(mapStateToProps)(AppHeader);