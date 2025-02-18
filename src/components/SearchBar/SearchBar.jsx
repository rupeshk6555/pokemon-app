import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokémon..."
      className="search-input"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
