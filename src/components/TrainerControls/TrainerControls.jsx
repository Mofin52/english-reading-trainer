import React from 'react';
import { connect } from 'react-redux';
import { Link } from  'react-router-dom';
import { resetState } from '../../actions';
import './TrainerControls.scss';
import i18next from 'i18next';

class TrainerControls extends React.Component {   

    renderReadingControls() {
        return (
            <div className='reading-trainer__controls'>
                {Object.keys(this.props.translation).length > 0 ? <Link to="/testing"><button>{(i18next.t('Testme'))}</button></Link> : null}
            </div>
        );
    }
    
    renderTestingControls() {
        return (
            <div className='reading-trainer__controls'>
                <Link to="/"><button onClick={this.props.resetState} className="reset">{(i18next.t('Back'))}</button></Link>
            </div>
        );
    }

    render() {
        return this.props.mode === 'reading' ? this.renderReadingControls() : this.renderTestingControls();
    }
};

const mapStateToProps = (state) => {
    return {
        translation: state.translation
    }
}

export default connect(mapStateToProps, { resetState })(TrainerControls);