import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
 onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
 const [searchValue, setSearchValue] = useState('');

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    onSearch(value); // Appel de la fonction de recherche avec la nouvelle valeur
 };

 return (
    <div
      style={{
        border: '1px solid black',
        height: '100%',
        margin: '1rem 0 0 1rem',
      }}
    >
      <div className="flex">
        <div>
          <SearchIcon fontSize="large" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="py-3 border-0 border-l-[1px]"
            value={searchValue}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
 );
};

export default SearchBar;