import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      onSearch(searchQuery);
    }
  }

  function handleInputChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;