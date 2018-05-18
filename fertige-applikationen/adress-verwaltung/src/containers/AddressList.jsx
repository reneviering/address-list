import React from 'react';
import {
  Button,
  Card
} from 'reactstrap';


import AddressSearch from '../components/AddressSearch';
import ActionBar from '../components/ActionBar';
import ConfirmDeleteAddressModal from '../components/ConfirmDeleteAddressModal';
import FilterableAddressTable from '../components/FilterableAddressTable';

class AddressList extends React.Component {
  constructor () {
    super();

    this.state = {
      addresses: [],
      searchTerm: '',
      addressToDelete: null,
      isConfirmDeleteModalOpen: false
    };
  }

  componentDidMount () {
    fetch('http://localhost:4000/addresses?fakeDataAmount=100').
      then(response => response.json()).
      then(addresses => {
        this.setState({ addresses });
      });
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
    if (!address) {
      throw new Error('address is missing.');
    }

    fetch(`http://localhost:4000/addresses/${address.id}`, {
			method: 'delete'
		}).
    then(response => response.json()).
    then(deletedAddress => {
      this.setState(prevState => ({
        addresses: prevState.addresses.filter(address => address.id !== deletedAddress.id),
        isConfirmDeleteModalOpen: false
      }));
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
          addresses={ this.state.addresses }
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

export default AddressList;
