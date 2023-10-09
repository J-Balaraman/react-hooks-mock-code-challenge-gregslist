import React, { useState } from "react";

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchQuery);
  }

  function handleInputChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
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
    </header>
  );
}

export default Header;