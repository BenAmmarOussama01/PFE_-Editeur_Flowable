import SearchIcon from '@mui/icons-material/Search'
const SearchBar = () => {
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
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
