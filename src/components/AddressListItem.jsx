import React from 'react';

function AddressListItem ({ address }) {
  return (
    <tr>
      <td>{ address.firstName }</td>
      <td>{ address.lastName }</td>
      <td>{ address.email }</td>
      <td>[ACTIONS…]</td>
    </tr>
  );
}

export default AddressListItem;
