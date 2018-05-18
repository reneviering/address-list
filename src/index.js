import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import AddressListContainer from './containers/AddressListContainer';
import About from './components/About';

ReactDOM.render(
  <Router>
    <Switch>
      <Redirect from="/" to="/list" exact />
      <Route path="/list" component={ AddressListContainer } />
      <Route path="/about" component={ About } />
      <Route component={ () => <div>404!</div> } />
    </Switch>
  </Router>,
  document.getElementById('root')
);
