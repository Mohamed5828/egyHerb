import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import URL from "../tools/config";

function SearchBar() {
  const inputRef = useRef(null);
  const [searchWord, setSearchWord] = useState("");
  function handleChange(event) {
    setSearchWord(event.target.value);
    console.log(searchWord);
  }
  function divClick() {
    inputRef.current.focus();
  }
  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setSearchWord("");
  };

  return (
    <div className="search-container" tabindex="0" onClick={divClick}>
      <span>
        <svg
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="search-svg"
        >
          <path d="M18.75 17.94l-4.53-4.53A5.44 5.44 0 0015.5 9.9a5.51 5.51 0 10-2 4.22l4.5 4.53a.52.52 0 00.71 0 .51.51 0 00.04-.71zM5.5 9.9a4.5 4.5 0 114.5 4.5 4.51 4.51 0 01-4.5-4.5z"></path>
        </svg>
      </span>
      <form role="search" action={`/postsearch/${searchWord}`} method="get">
        <input
          autoComplete="off"
          placeholder="Find anything herb..."
          value={searchWord}
          onChange={handleChange}
          name="search"
          className="search-bar"
          ref={inputRef}
        />
      </form>
      <button className="cancel-btn" onClick={handleButtonClick}>
        <span>
          <svg
            focusable="false"
            viewBox="2 2 24 24"
            aria-hidden="true"
            class="cancel-search-svg"
          >
            <path d="M18 18.5a.47.47 0 01-.35-.15l-8-8a.49.49 0 01.7-.7l8 8a.48.48 0 010 .7.47.47 0 01-.35.15z"></path>
            <path d="M10 18.5a.47.47 0 01-.35-.15.48.48 0 010-.7l8-8a.49.49 0 11.7.7l-8 8a.47.47 0 01-.35.15z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
}

export default SearchBar;
