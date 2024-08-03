import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Gallery from "./Gallery";
import "./Search.css";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleImages(response) {
    if (response) {
      setPhotos(response.data.photos);
    } else {
      return null;
    }
  }

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

      let imagesApiKey = "68a066fb34dtb3fc9d4875c8d3bo09b6";
      let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;

      axios.get(imagesApiUrl).then(handleImages);
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
      <Gallery photos={photos}/>
    </div>
  );
}
