import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Result from "./Result";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  function handleResponse(response) {
    if (response.data.status === "not_found") {
      alert("Word not found, please try a different one");
    } else {
      setResult(response.data);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (keyword) {
      let apiKey = "68a066fb34dtb3fc9d4875c8d3bo09b6";
      let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

      axios.get(apiUrl).then(handleResponse);
    } else {
      alert("Please type a word");
    }
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
      <Result result={result} />
    </div>
  );
}
