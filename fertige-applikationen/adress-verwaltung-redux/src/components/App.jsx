import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import {
  Container
} from 'reactstrap';

import Navigation from './Navigation';
import About from './About';
import AddressList from '../containers/AddressList';
import AddressDetails from '../containers/AddressDetails';
import EditAddress from '../containers/EditAddress';
import CreateAddress from '../containers/CreateAddress';

const App = () => (
    <Router>
      <div>
      <Navigation />
      <Container>
        <Switch>
          <Redirect from="/" to="/list" exact/>
          <Route path="/list" component={ AddressList } />
          <Route path="/details/:addressId" component={ AddressDetails } exact />
          <Route path="/edit/:addressId" component={ EditAddress } exact />
          <Route path="/create" component={ CreateAddress } exact />
          <Route path="/about" component={ About } />
        </Switch>
      </Container>
      </div>
    </Router>
);

export default App;
