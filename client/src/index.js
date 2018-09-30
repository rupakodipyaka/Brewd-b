import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Header from './Header';
import Usertype from './Usertype';
import Signup from './Signup';
import Login from './Login';
import Admin from './admin';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
      <div>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Usertype} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/app" component={App} />
        <Route exact path="/admin" component={Admin} />
      </div>
  </Router>,
  document.getElementById('root')
)

registerServiceWorker();
