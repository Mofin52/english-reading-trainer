import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Reading from './Reading/Reading';
import Testing from './Testing/Testing';
import './App.scss';
import connect from "react-redux/es/connect/connect";

const App = () => {
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
};

const mapStateToProps = (state) => {
    return {
        language: state.locale.value
    };
};

export default connect(mapStateToProps)(App);
// export default App;
