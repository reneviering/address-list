import React from 'react';

import Search from './Search';
import AddressList from './AddressList';
import ActionBar from './ActionBar';

import {
  Button
} from 'reactstrap';

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

        <ActionBar>
          <Button color="primary">Adresse hinzufügen</Button>
        </ActionBar>

        <AddressList
          addresses={ this.props.addresses }
          searchTerm={ this.state.searchTerm }
        />
      </React.Fragment>
    );
  }
}

export default FilterableAddressList;
