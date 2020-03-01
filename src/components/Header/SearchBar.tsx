import React, { ReactElement } from 'react';
// TODO: design and functionality
function SearchBar(): ReactElement {
  return (
    <div style={{ width: 470 }}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span
            className="input-group-text bg-light border-0"
            id="basic-addon1"
          >
            <i className="fas fa-search text-secondary" />
          </span>
        </div>
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
