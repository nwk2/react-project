import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import Header from './components/Header';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<App />, document.getElementById("root"));
