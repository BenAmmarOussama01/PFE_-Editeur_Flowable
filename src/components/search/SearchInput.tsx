import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

const SearchInput = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        mt: 2,
        display: 'flex',
        alignItems: 'center',
        width: 250,
        borderColor: '#111',
        borderWidth: '2px',
      }}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider orientation="vertical" flexItem />{' '}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  )
}

export default SearchInput
