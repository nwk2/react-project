import React/*, { Component }*/ from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import FilterTable from './components/FilterTable';

const App = () =>
    <div className='ui container'>
        <Route path='/'  exact component={HomePage} />
        <Route path='/login' exact component={LoginPage}/>
        <Route path='/data' exact component={FilterTable}/>
    </div>;

export default App;