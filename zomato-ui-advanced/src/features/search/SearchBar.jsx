import { useState, useEffect } from 'react';
import { FiSearch, FiX, FiFilter } from 'react-icons/fi';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { filterRestaurants } from './searchSlice';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 1rem auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  padding-left: 45px;
  border-radius: 25px;
  border: 1px solid #e0e0e0;
  font-size: 16px;
  outline: none;
  transition: all 0.3s;

  &:focus {
    border-color: #ff7e8b;
    box-shadow: 0 0 0 2px rgba(255, 126, 139, 0.2);
  }
`;

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(filterRestaurants(query));
    }, 300);

    return () => clearTimeout(timer);
  }, [query, dispatch]);

  return (
    <SearchContainer>
      <FiSearch style={searchIconStyle} />
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for restaurants or cuisines..."
      />
      {query && (
        <button style={clearButtonStyle} onClick={() => setQuery('')}>
          <FiX />
        </button>
      )}
      <button style={filterButtonStyle}>
        <FiFilter />
      </button>
    </SearchContainer>
  );
};

// Style objects would be defined here...