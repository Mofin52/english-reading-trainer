import React from 'react';
import TextContainer from '../TextContainer/TextContainer';
import TrainerControls from '../TrainerControls/TrainerControls';
import SideNotes from '../SideNotes/SideNotes';
import AppHeader from '../AppHeader/AppHeader';
import './Reading.scss';

const Reading = () => {
    return(
        <div>
            <AppHeader mode='reading'/>
            <div className='reading-trainer__content'>
                <TrainerControls  mode='reading'/>
                <TextContainer/>
                <SideNotes/>
            </div>
        </div>
    )
};

export default Reading;

    