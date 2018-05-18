import React from 'react';

import AddressListItem from './AddressListItem';

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

export default AddressList;
