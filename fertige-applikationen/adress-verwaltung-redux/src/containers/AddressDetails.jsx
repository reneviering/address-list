import React from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';

import ActionBar from '../components/ActionBar';

import { requestAddressById } from '../actions';

class AddressDetails extends React.Component {
  componentDidMount () {
    this.props.requestAddressById(this.props.match.params.addressId);
  }

  handleRequestEditAddress = () => {
    this.props.history.push(`/edit/${this.props.address.id}`);
  }

  render () {
    if (!this.props.address) return null;

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
          <dd>{ this.props.address.firstName }</dd>

          <dt>Nachname:</dt>
          <dd>{ this.props.address.lastName }</dd>

          <dt>E-Mail:</dt>
          <dd>{ this.props.address.email }</dd>
        </dl>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  address: state.address.find(address => address.id === ownProps.match.params.addressId)
});

const actions = {
  requestAddressById
}

export default connect(mapStateToProps, actions)(AddressDetails);
