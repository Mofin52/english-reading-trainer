import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import TrainerControls from '../TrainerControls/TrainerControls';
import WordTestForm from '../WordTestForm/WordTestForm';
import Results from '../Results/Results';
import './Testing.scss';

const Testing = () => {
    return(
        <div>
            <AppHeader mode='testing'/>
            <div className='reading-trainer__content'>
                <TrainerControls  mode='testing'/>
                <WordTestForm/>
            </div>
            <Results/>
        </div>
    )
};

export default Testing;

    