import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import {
  Container
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import AddressListContainer from './containers/AddressListContainer';
import About from './components/About';

import Navigation from './components/Navigation';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Navigation />

      <Container>
        <Switch>
          <Redirect from="/" to="/list" exact />
          <Route path="/list" component={ AddressListContainer } />
          <Route path="/create" component={ AddressListContainer } />
          <Route path="/about" component={ About } />
          <Route component={ () => <div>404!</div> } />
        </Switch>
      </Container>

    </React.Fragment>
  </Router>,
  document.getElementById('root')
);
