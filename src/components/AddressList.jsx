import React from 'react';

import {
  Table
} from 'reactstrap';

import AddressListItem from './AddressListItem';

function AddressList ({ addresses, searchTerm }) {
  const addressListItems = addresses
    .filter(address => `${address.firstName}${address.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()))
    .map(address => {
      return <AddressListItem key={address.id } address={ address } />
    });

  return (
    <Table>

      <thead>
        <tr>
          <th>Vorname</th>
          <th>Nachname</th>
          <th>E-Mail</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        { addressListItems }
      </tbody>

    </Table>
  );
}

export default AddressList;
