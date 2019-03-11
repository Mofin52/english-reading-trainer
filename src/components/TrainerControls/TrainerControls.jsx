import React from 'react';
import { connect } from 'react-redux';
import { switchToTestPhase } from '../../actions';
import './TrainerControls.scss';

class TrainerControls extends React.Component {

    handleTestMeClick = (ev) => {
        ev.preventDefault();
        this.props.switchToTestPhase();
    }

   
    render() {
       return (
            <div className='reading-trainer__controls'>
                <button onClick={this.handleTestMeClick}>Test me!</button>
            </div>
        );
    } 
};

const mapStateToProps = (state) => {
    return {
        phase: state.phase
    };
}

export default connect(mapStateToProps, { switchToTestPhase })(TrainerControls);