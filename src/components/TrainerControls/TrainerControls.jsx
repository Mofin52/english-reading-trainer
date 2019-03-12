import React from 'react';
import { Link } from  'react-router-dom';
import './TrainerControls.scss';

class TrainerControls extends React.Component {   
    render() {
       if (this.props.mode === 'reading') {
        return (
            <div className='reading-trainer__controls'>
                <Link to="/testing"><button>Test me!</button></Link>
            </div>
        );
       }

       if (this.props.mode === 'testing') {
            return (
                <div className='reading-trainer__controls'>
                    <Link to="/"><button>Back to text</button></Link>
                </div>
            );
       }
    } 
};

export default TrainerControls;