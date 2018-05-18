import React from 'react';

import { Table } from 'reactstrap';

import { Link } from 'react-router-dom';

import AddressRow from './AddressRow';

const FilterableAddressTable = ({ addresses, searchTerm, onRequestEditAddress, onRequestDeleteAddress, onRequestShowAddressDetails }) => (
  <Table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>E-Mail</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      { addresses.
        filter(address => `${address.firstName}${address.lastName}${address.email}`.includes(searchTerm)).
        map(address => (
          <AddressRow
            key={ address.id }
            address={ address }
            onRequestEditAddress={ onRequestEditAddress }
            onRequestDeleteAddress={ onRequestDeleteAddress }
            onRequestShowAddressDetails= { onRequestShowAddressDetails }
          />
        ))
      }
    </tbody>
  </Table>
);

FilterableAddressTable.defaultProps = {
  addresses: []
};

export default FilterableAddressTable;
