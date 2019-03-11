import React from 'react';
import AppHeader from './AppHeader/AppHeader';
import TextContainer from './TextContainer/TextContainer';
import SideNotes from './SideNotes/SideNotes';

import './App.scss';

const App = () => {
    return (
        <div className='reading-trainer'>
            <AppHeader/>
            <div className='reading-trainer__content'>
                <TextContainer/>
                <SideNotes/>
            </div>
        </div>
    )
}

export default App;