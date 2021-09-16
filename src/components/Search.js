import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import RandomCocktail from "./RandomCocktail";

function Search() {
  const { setSearch } = useGlobalContext();
  const searchTerm = useRef("");

  const searchCocktail = () => {
    setSearch(searchTerm.current.value);
  };

  useEffect(() => {
    searchTerm.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search</label>
          <input
            type="text"
            id="search"
            placeholder="Eg:blue"
            ref={searchTerm}
            onChange={searchCocktail}
          />
        </div>
        <p>or</p>
        <RandomCocktail></RandomCocktail>
      </form>

    </div>
  );
}

export default Search;
