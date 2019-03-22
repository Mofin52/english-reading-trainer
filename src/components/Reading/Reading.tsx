import * as React from 'react';
import TextContainer from '../TextContainer/TextContainer';
import AppHeader from '../AppHeader/AppHeader';
import TrainerControls from '../TrainerControls/TrainerControls';
import SideNotes from '../SideNotes/SideNotes';
import './Reading.scss';

const Reading = ():JSX.Element => {
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

    