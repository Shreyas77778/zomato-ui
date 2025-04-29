// components/SearchBar.js
import { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if(value.length > 2) {
      // Add API call to fetch suggestions
      // const results = await fetchSearchSuggestions(value);
      // setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <FiSearch className="search-icon" />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for restaurants, cuisines..."
        />
        {query && (
          <button className="clear-btn" onClick={() => setQuery('')}>
            <FiX />
          </button>
        )}
      </div>
      {suggestions.length > 0 && (
        <div className="suggestions-dropdown">
          {suggestions.map((item, index) => (
            <div key={index} className="suggestion-item">
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;