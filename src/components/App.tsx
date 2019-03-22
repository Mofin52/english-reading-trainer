import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Reading from './Reading/Reading';
import Testing from './Testing/Testing';
import './App.scss';

const App = ():JSX.Element => {
    return (
        <div className='reading-trainer'>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={Reading}/>
                    <Route path='/testing' exact component={Testing}/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;