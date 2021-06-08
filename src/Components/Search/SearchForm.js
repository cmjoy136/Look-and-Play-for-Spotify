import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim() !== "") {
      setErrorMsg("");
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg("Search for an Artist, Song, or Album!");
      console.log(errorMsg);
    }
  };

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <label htmlFor="spotify-search">
        <span className="hide">Spotify Search</span>
      </label>
      <button type="submit">
        <FiSearch />
      </button>
      <input
        type="text"
        onChange={handleChange}
        value={searchTerm}
        placeholder="Search for an Artist, Song, or Album!"
        enterbutton="Search"
      />
    </form>
  );
};

export default SearchBar;
