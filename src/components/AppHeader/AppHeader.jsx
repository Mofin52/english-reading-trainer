import React from 'react';
import {connect} from 'react-redux';
import Tranzlator from '../Tranzlator/tranzlator'
import i18next from 'i18next';

import './AppHeader.scss';

class AppHeader extends React.Component {

    render() {
        return (
            <div className='reading-trainer__header'>
                <Tranzlator/>
                <h1>
                {
                    this.props.mode === 'testing' ?
                        (i18next.t('header_t')) :
                        (i18next.t('header'))
                }
                </h1>

                <p>
                    {
                        this.props.mode === 'testing' ?
                            (i18next.t('key') + `${this.props.title}` + i18next.t('key2')) :
                            (i18next.t('key3') + `${this.props.title}`)
                    }
                </p>

                <p>
                    {
                        this.props.mode === 'testing' ?
                            (i18next.t('key4')) :
                            (i18next.t('key5') + `${this.props.words}`)
                    }
                </p>

                {this.props.mode === 'reading' ? <p>{i18next.t('key6')}</p> : null}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.text.title,
        words: state.text.words,
        cards: state.wordCards
    }
};

export default connect(mapStateToProps)(AppHeader);