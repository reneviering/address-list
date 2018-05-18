import React from 'react';

import Search from './Search';
import AddressList from './AddressList';

class FilterableAddressList extends React.Component {
  constructor () {
    super();

    this.state = {
      searchTerm: ''
    };
  }

  handleSearchTermChange = searchTerm => {
    this.setState({ searchTerm });
  }

  render () {
    return (
      <React.Fragment>
        <Search
          searchTerm={ this.state.searchTerm }
          onSearchTermChange={ this.handleSearchTermChange }
        />
        <AddressList
          addresses={ this.props.addresses }
          searchTerm={ this.state.searchTerm }
        />
      </React.Fragment>
    );
  }
}

export default FilterableAddressList;
