import React from 'react';

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

export default Search;
