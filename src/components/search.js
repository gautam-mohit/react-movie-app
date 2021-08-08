import React, { useState } from "react";

function Search(props) {
  const { onChange } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const handleonSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      onChange(searchTerm);
      setSearchTerm("");
    }
  };

  const handleonChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <header>
      <form onSubmit={handleonSubmit}>
        <input
          className="search"
          type="search"
          placeholder="search for movie"
          value={searchTerm}
          onChange={handleonChange}
        />
      </form>
    </header>
  );
}

export default Search;
// dumb comp
//smart comp
