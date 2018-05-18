import React from 'react';
import { connect } from 'react-redux';

import {
  Button,
  Card
} from 'reactstrap';


import AddressSearch from '../components/AddressSearch';
import ActionBar from '../components/ActionBar';
import ConfirmDeleteAddressModal from '../components/ConfirmDeleteAddressModal';
import FilterableAddressTable from '../components/FilterableAddressTable';

import {
  requestAddresses,
  deleteAddress
} from '../actions';

class AddressList extends React.Component {
  constructor () {
    super();

    this.state = {
      searchTerm: '',
      addressToDelete: null,
      isConfirmDeleteModalOpen: false
    };
  }

  componentDidMount () {
    this.props.requestAddresses();
  }

  handleSearchTermChange = searchTerm => {
    this.setState({ searchTerm });
  }

  handleRequestEditAddress = address => {
    this.props.history.push(`/edit/${address.id}`);
  }

  handleRequestDeleteAddress = address => {
    this.setState({
      addressToDelete: address,
      isConfirmDeleteModalOpen: true
    });
  }

  handleConfirmDeleteAddress = address => {
    this.props.deleteAddress(address).then(() => {
      this.setState({ isConfirmDeleteModalOpen: false });
    });
  }

  toggleConfirmDeleteModal = () => {
    this.setState(prevState => ({ isConfirmDeleteModalOpen: !prevState.isConfirmDeleteModalOpen }));
  }

  handleRequestShowAddressDetails = address => {
    this.props.history.push(`/details/${address.id}`);
  }

  handleCreateNewAddressClick = () => {
    this.props.history.push('/create');
  }

  render () {
    return (
      <div>
        <AddressSearch
          onSearchTermChange={ this.handleSearchTermChange }
        />

        <ActionBar>
          <Button onClick={ this.handleCreateNewAddressClick } color="primary">Neue Adresse hinzufügen</Button>
        </ActionBar>

        <FilterableAddressTable
          addresses={ this.props.addresses }
          searchTerm={ this.state.searchTerm }
          onRequestEditAddress= { this.handleRequestEditAddress }
          onRequestDeleteAddress={ this.handleRequestDeleteAddress }
          onRequestShowAddressDetails= { this.handleRequestShowAddressDetails }
        />

        <ConfirmDeleteAddressModal
          address={ this.state.addressToDelete }
          isOpen={ this.state.isConfirmDeleteModalOpen }
          toggle={ this.toggleConfirmDeleteModal }
          onConfirm={ this.handleConfirmDeleteAddress }
        />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addresses: state.address
  };
};

const actions = {
  requestAddresses,
  deleteAddress
};

export default connect(mapStateToProps, actions)(AddressList);
