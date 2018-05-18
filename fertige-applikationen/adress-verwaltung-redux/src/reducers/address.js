import {
  RECEIVE_ADDRESSES,
  ADDRESS_DELETED,
  ADDRESS_RECEIVED,
  ADDRESS_UPDATED
} from '../actions';

const reducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_ADDRESSES:
      return action.addresses;

    case ADDRESS_DELETED:
      return state.filter(address => address.id !== action.deletedAddress.id);

    case ADDRESS_RECEIVED:
      return state.some(address => address.id === action.address.id)
        ? state.map(address => {
          if (address.id !== action.address.id) {
            return address;
          }

          return action.address;
        })
        : [ action.address];

    case ADDRESS_UPDATED:
      return state.map(address => {
        if (address.id !== action.updatedAddress.id) {
          return address;
        }

        return action.updatedAddress;
      });
    default:
      return state;
  }
};

export default reducer;
