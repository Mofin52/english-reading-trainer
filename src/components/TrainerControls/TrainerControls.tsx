import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from  'react-router-dom';
import { resetState } from '../../actions';
import './TrainerControls.scss';

class TrainerControls extends React.Component<IProps> {   

    public renderReadingControls():JSX.Element {
        return (
            <div className='reading-trainer__controls'>
                {Object.keys(this.props.translation).length > 0 ? <Link to="/testing"><button>Test me!</button></Link> : null}
            </div>
        );
    }
    
    public renderTestingControls():JSX.Element {
        return (
            <div className='reading-trainer__controls'>
                <Link to="/"><button onClick={this.props.resetState} className="reset">Back & Reset</button></Link>
            </div>
        );
    }

    public render():JSX.Element {
        return this.props.mode === 'reading' ? this.renderReadingControls() : this.renderTestingControls();
    }
};

interface IProps {
    translation: Object;
    resetState: React.FormEventHandler;
    mode: string;
}

const mapStateToProps = (state):Object => {
    return {
        translation: state.translation
    }
}

export default connect(mapStateToProps, { resetState })(TrainerControls);