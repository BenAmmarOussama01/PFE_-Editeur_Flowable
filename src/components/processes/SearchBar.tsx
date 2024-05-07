import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'

interface SearchBarProps {
  onSearch: (value: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchValue(value)
    onSearch(value) // Appel de la fonction de recherche avec la nouvelle valeur
  }

  return (
    <div>
      <div className="flex items-center ml-3">
        <div className="border ">
          <SearchIcon fontSize="large" />
        </div>
        <input
          type="text"
          placeholder="Search "
          className="p-1 border"
          value={searchValue}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default SearchBar
