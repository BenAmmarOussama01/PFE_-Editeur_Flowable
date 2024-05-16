import React, { useState } from 'react'
import SearchInput from '../search/SearchInput'

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
        <SearchInput />
      </div>
    </div>
  )
}

export default SearchBar