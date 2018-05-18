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
    fetch('http://localhost:4000/addresses?fakeDataAmount=1000')
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
