import React from 'react';

import FilterableAddressList from '../components/FilterableAddressList';

class AddressListContainer extends React.Component {
  constructor () {
    super();

    this.state = {
      addresses: []
    };
  }

  componentDidMount () {
    fetch('data.json')
      .then(response => response.json())
      .then(addresses => {
        this.setState({ addresses });
      });
  }

  render () {
    return (
      <FilterableAddressList
        addresses={ this.state.addresses }
      />
    );
  }
}

export default AddressListContainer;
