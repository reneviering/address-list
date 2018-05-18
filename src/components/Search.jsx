import React from 'react';

function Search ({ searchTerm, onSearchTermChange }) {

  const handleChange = event => {
    if (typeof onSearchTermChange !== 'function') return;

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

Search.defaultProps = {
  searchTerm: ''
}

export default Search;
