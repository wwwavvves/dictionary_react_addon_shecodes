import React, { useState } from "react";
import "./Search.css";

export default function Search() {
    const [keyword, setKeyword] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        alert(keyword);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="search" className="input" placeholder="Search for a word" autoFocus onChange={handleKeywordChange}/>
        <input type="submit" className="search-btn" value=
        'Search' />
      </form>
    </div>
  );
}
