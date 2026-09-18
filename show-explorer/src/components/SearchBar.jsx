import { useState } from "react";

function SearchBar({ onSearch, searchTerm }) {
  const [query, setQuery] = useState(searchTerm);

  function handleSubmit(event) {
    event.preventDefault();

    onSearch(query.trim());
  }

  function handleClear() {
    setQuery("");
    onSearch("");
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <i className="fa-solid fa-magnifying-glass"></i>

        <input
          type="text"
          placeholder="Search for a show..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        {query && (
          <button
            type="button"
            className="clear-button"
            onClick={handleClear}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        )}

        <button className="search-button" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;