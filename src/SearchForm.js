// components/SearchForm.js

import React from "react";

const SearchForm = ({ searchFilters, setSearchFilters, fetchData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="container">
      <div className="search-text">
        <h2>Search Capsules</h2>
        <p>Search for capsules based on status, original launch, and type</p>
      </div>

      <div className="search-form">
        {/* Your search form UI goes here */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="status"
            value={searchFilters.status}
            onChange={handleChange}
            placeholder="Status"
          />
          <input
            type="text"
            name="original_launch"
            value={searchFilters.original_launch}
            onChange={handleChange}
            placeholder="Original Launch"
          />
          <input
            type="text"
            name="type"
            value={searchFilters.type}
            onChange={handleChange}
            placeholder="Type"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
