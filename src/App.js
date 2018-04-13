import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import TabMenu from './components/TabMenu';
import Sources from './components/Sources';
import Header from "./components/Header";

const App = () =>

    <div>
        <Header/>

            <Router>
                <div>
                    <Route path='/'  exact component={TabMenu} />
                    <Route path='/sources'  exact component={Sources} />
                    <Route path='/login'  exact component={LoginPage} />
                </div>
            </Router>
    </div>;

export default App;