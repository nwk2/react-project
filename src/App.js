import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import TabMenu from "./components/TabMenu";

const App = () =>

    <Router>
    <div>
        <Route path='/'  exact component={TabMenu} />
        <Route path='/login'  exact component={LoginPage} />
    </div>
    </Router>
;

export default App;