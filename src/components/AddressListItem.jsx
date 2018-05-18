import React from 'react';

function AddressListItem ({ address }) {
  return (
    <li>{ `${address.firstName} ${address.lastName}` }</li>
  );
}

export default AddressListItem;
