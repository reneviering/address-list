import React from 'react';

import { Link } from 'react-router-dom';

import AddressForm from '../components/AddressForm';

class AddressDetails extends React.Component {
  constructor () {
    super();

    this.state = {
      address: null
    };
  }

  componentDidMount () {
    fetch(`http://localhost:4000/addresses/${this.props.match.params.addressId}`).
      then(response => response.json()).
      then(address => {
        this.setState({ address });
      });
  }

  handleSaveAddress = address => {
    fetch(`http://localhost:4000/addresses/${this.props.match.params.addressId}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(address)
    }).
      then(() => {
        this.props.history.goBack();
      });
  };

  render () {
    if (!this.state.address) return null;

    return (
      <div>
        <p>
          <Link to="/list">zurück zur Liste</Link>
        </p>

        <h3>Edit</h3>

        <AddressForm
          address={ this.state.address }
          onSaveAddress={ this.handleSaveAddress }
        />

      </div>
    );
  }
}

export default AddressDetails;
