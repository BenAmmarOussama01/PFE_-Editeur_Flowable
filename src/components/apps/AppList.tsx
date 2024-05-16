
import { useAppSelector } from '../../feature/hooks'
import Loader from '../loader/Loader'
import { Grid, Box } from '@mui/material'
import AppItem from './AppItem'
//import Appes from '../../fakeData.json'
const AppList = () => {
  const { items,loading} = useAppSelector((state) => state.app)
  return loading ? (
    <Loader />
  ) : (
    <div>
      {items.length > 0 && (
        <p style={{ marginTop: '2rem' }}>
          Il y a {items.length} definitions d'apps
        </p>
      )}
      <Grid container spacing={2} sx={{ mb: 13 }}>
        {items.map((item, index) => (
          <Grid item key={index}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  zIndex: 1,
                },
              }}
            >
              <AppItem {...item}/>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default AppList
