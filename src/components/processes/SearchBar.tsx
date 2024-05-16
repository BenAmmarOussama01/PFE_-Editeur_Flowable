import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import SearchInput from '../search/SearchInput'

interface SearchBarProps {
  onSearch: (value: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div>
      <div className="flex items-center ml-3"></div>
    </div>
  )
}

export default SearchBar
