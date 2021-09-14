import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

function Search() {
  const { setSearch } = useGlobalContext();
  const searchTerm = useRef("");

  const searchCocktail = () => {
    setSearch(searchTerm.current.value);
  };

  useEffect(() => {
      searchTerm.current.focus();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Cocktail</label>
          <input
            type="text"
            id="search"
            placeholder="Eg:blue"
            className="search-input"
            ref={searchTerm}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
