import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [keyword, setKeyword] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setLoaded(true);

    if (loaded) {
      console.log(response.data.meanings);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "68a066fb34dtb3fc9d4875c8d3bo09b6";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="input"
          placeholder="Search for a word"
          autoFocus
          onChange={handleKeywordChange}
        />
        <input type="submit" className="search-btn" value="Search" />
      </form>
    </div>
  );
}
