import React, { ReactElement } from 'react';
// TODO: design and functionality
function SearchBar(): ReactElement {
  return (
    <div style={{ width: 470 }}>
      <div className="input-group">
        <input
          type="search"
          className="form-control bg-light border-0"
          id="inlineFormInputGroupUsername2"
          placeholder="Търси за градове, държави или места..."
        />
      </div>
    </div>
  );
}

export default SearchBar;
