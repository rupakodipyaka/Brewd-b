import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Usertype from './Usertype';
import Signup from './Signup';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Usertype />, document.getElementById('usertype'));
ReactDOM.render(<Signup />, document.getElementById('signup'));
ReactDOM.render(<Login />, document.getElementById('login'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
