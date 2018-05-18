const RECEIVE_ADDRESSES = 'RECEIVE_ADDRESSES';
const requestAddresses = () => (dispatch, getState) => {
  const addresses = getState().address;

  fetch('http://localhost:4000/addresses?fakeDataAmount=100').
    then(response => response.json()).
    then(addresses => {
      dispatch({
        type: RECEIVE_ADDRESSES,
        addresses
      });
    });
};

const ADDRESS_DELETED = 'ADDRESS_DELETED';
const deleteAddress = address => dispatch => {
  if (!address) {
    throw new Error('address is missing.');
  }

  return fetch(`http://localhost:4000/addresses/${address.id}`, {
    method: 'delete'
  }).
  then(response => response.json()).
  then(deletedAddress => {
    dispatch({
      type: ADDRESS_DELETED,
      deletedAddress
    });
  });
};

const ADDRESS_RECEIVED = 'ADDRESS_RECEIVED';
const requestAddressById = addressId => (dispatch, getState) => {

  const addresses = getState().address;

  if (addresses.some(address => address.id === addressId)) {
    return;
  }

  fetch(`http://localhost:4000/addresses/${addressId}`).
    then(response => response.json()).
    then(address => {
      dispatch({
        type: ADDRESS_RECEIVED,
        address
      });
    });
};

const ADDRESS_UPDATED = 'ADDRESS_UPDATED';
const updateAddress = address => dispatch => {
  return fetch(`http://localhost:4000/addresses/${address.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(address)
  }).
    then(response => response.json()).
    then(updatedAddress => {
      dispatch({
        type: ADDRESS_UPDATED,
        updatedAddress
      });
    });
};

export {
  requestAddresses,
  RECEIVE_ADDRESSES,

  deleteAddress,
  ADDRESS_DELETED,

  requestAddressById,
  ADDRESS_RECEIVED,

  updateAddress,
  ADDRESS_UPDATED
};
