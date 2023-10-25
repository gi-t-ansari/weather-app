import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const getCity = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={getCity}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
