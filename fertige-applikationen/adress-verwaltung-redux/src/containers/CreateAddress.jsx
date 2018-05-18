import React from 'react';

import { Link } from 'react-router-dom';

import AddressForm from '../components/AddressForm';

class CreateAddress extends React.Component {
  handleSaveAddress = address => {
    fetch('http://localhost:4000/addresses', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(address)
    });
  }

  render () {
    return (
      <div>
        <p>
          <Link to="/list">zurück zur Liste</Link>
        </p>

        <h3>Create</h3>

        <AddressForm
          onSaveAddress={ this.handleSaveAddress }
        />
      </div>
    );
  }
}

export default CreateAddress;
