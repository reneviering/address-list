import React from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import AddressForm from '../components/AddressForm';

import { requestAddressById, updateAddress } from '../actions';

class AddressDetails extends React.Component {
  constructor () {
    super();

    this.state = {
      address: null
    };
  }

  componentDidMount () {
    this.props.requestAddressById(this.props.match.params.addressId);
  }

  handleSaveAddress = address => {
    this.props.updateAddress(address).then(() => {
      this.props.history.goBack();
    });
  }

  render () {
    if (!this.props.address) return null;

    return (
      <div>
        <p>
          <Link to="/list">zurück zur Liste</Link>
        </p>

        <h3>Edit</h3>

        <AddressForm
          address={ this.props.address }
          onSaveAddress={ this.handleSaveAddress }
        />

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  address: state.address.find(address => address.id === ownProps.match.params.addressId)
});

const actions = {
  requestAddressById,
  updateAddress
};

export default connect(mapStateToProps, actions)(AddressDetails);
