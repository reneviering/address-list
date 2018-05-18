import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import AddressListContainer from './containers/AddressListContainer';
import About from './components/About';

import Navigation from './components/Navigation';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Navigation />
      <Switch>
        <Redirect from="/" to="/list" exact />
        <Route path="/list" component={ AddressListContainer } />
        <Route path="/about" component={ About } />
        <Route component={ () => <div>404!</div> } />
      </Switch>
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);
