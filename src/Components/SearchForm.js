import React, { useState } from "react";
import {Input, Button } from "antd";

const { Search } = Input

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSearch = (e) => {
    e.preventDefault()

    if (searchTerm.trim() !== ''){
        setErrorMsg('')
        props.onSearch(searchTerm)
    } else {
        setErrorMsg('Search for an Artist, Song, or Album!')
    }
  }

  const handleChange = (e) => {
      const  searchTerm = e.target.value
      setSearchTerm(searchTerm)
  }

  return (
        <div>
            <Search onSearch={onSearch}
                onChange={handleChange}
                value={searchTerm}
                placeholder="Search for an Artist, Song, or Album!"
                enterButton="Search"
            />
        </div>
  );
};

export default SearchForm;
