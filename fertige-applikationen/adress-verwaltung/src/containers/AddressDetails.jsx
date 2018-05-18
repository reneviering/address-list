import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';

import ActionBar from '../components/ActionBar';

class AddressDetails extends React.Component {
  constructor () {
    super();

    this.state = {
      address: null
    }
  }

  componentDidMount () {
    fetch(`http://localhost:4000/addresses/${this.props.match.params.addressId}`).
      then(response => response.json()).
      then(address => {
        this.setState({ address });
      });
  }

  handleRequestEditAddress = () => {
    this.props.history.push(`/edit/${this.state.address.id}`);
  }

  render () {
    if (!this.state.address) return null;

    return (
      <div>
        <p>
          <Link to="/list">zurück zur Liste</Link>
        </p>

        <ActionBar>
          <Button onClick={ this.handleRequestEditAddress } color="primary">Editieren</Button>
        </ActionBar>

        <dl>
          <dt>Vorname:</dt>
          <dd>{ this.state.address.firstName }</dd>

          <dt>Nachname:</dt>
          <dd>{ this.state.address.lastName }</dd>

          <dt>E-Mail:</dt>
          <dd>{ this.state.address.email }</dd>
        </dl>

      </div>
    );
  }
}

export default AddressDetails;
