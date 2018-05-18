import React from 'react';
import debounce from 'lodash.debounce';

const AddressSearch = ({ onSearchTermChange }) => {

  const onSearchTermChangeDebounced = debounce(onSearchTermChange, 250);

  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search…"
          onChange={ event => onSearchTermChangeDebounced(event.target.value) }
        />
      </div>
    </form>
  );
};

export default AddressSearch;
