import React from 'react';
import ReactDOM from 'react-dom';

const data = [{
  id: '4711',
  firstName: 'René',
  lastName: 'Mustermann',
  email: 'rene.mustermann@musterstadt.de'
},
{
  id: '4712',
  firstName: 'Daniel',
  lastName: 'Mustermann',
  email: 'd.mustermann@musterstadt.de'
},
{
  id: '4713',
  firstName: 'Oliver',
  lastName: 'Mustermann',
  email: 'o@mustermann.de'
}];


function Search ({ searchTerm, onSearchTermChange }) {

  const handleChange = event => {
    onSearchTermChange(event.target.value);
  };

  return (
    <label>
      Search:
      <input
        type="text"
        value={ searchTerm }
        placeholder="Search…"
        onChange={ handleChange }
      />
    </label>
  );
}

function AddressList ({ addresses, searchTerm }) {
  const addressListItems = addresses
    .filter(address => `${address.firstName}${address.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()))
    .map(address => {
      return <AddressListItem key={address.id } address={ address } />
    });

  return (
    <ul>
      { addressListItems }
    </ul>
  );
}

function AddressListItem ({ address }) {
  return (
    <li>{ `${address.firstName} ${address.lastName}` }</li>
  );
}

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


fetch('http://localhost:3000/data.json')
  .then(response => response.json())
  .then(data => {
    ReactDOM.render(
      <FilterableAddressList addresses={ data } />,
      document.getElementById('root')
    );
  })

/*
- Ursprungsdaten
- Suchtext => STATE
- gefilterte Liste

- Werden Daten über Props übergeben? => kein State
- Lassen sich die Daten auf Grundlage von anderen DAten berechnen? => kein State
- Sind DAten unveränderlich? => kein State

*/
