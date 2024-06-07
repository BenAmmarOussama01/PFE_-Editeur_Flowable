import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Box from '@mui/material/Box'

interface ISearchInputProps {
  handleSearchText: (value: any) => void
}

const SearchInput = ({ handleSearchText }: ISearchInputProps) => {
  return (
    <Box sx={{ ml: 3 }}>
      <OutlinedInput
        sx={{ width: 250, height: 40 }}
        onChange={handleSearchText}
        placeholder="Please enter text"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </Box>
  )
}

export default SearchInput
