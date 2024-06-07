import Loader from '../loader/Loader'
import { Grid, Box, Typography } from '@mui/material'
import AppItem from './AppItem'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../feature/hooks'
const AppList = () => {
  const { items, loading } = useAppSelector((state) => state.app)

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {items.length > 0 ? (
            <Typography sx={{ mb: 3 }}>
              {items.length == 1
                ? 'There is 1 app definition'
                : `There are ${items.length} app definitions`}
            </Typography>
          ) : (
            <Typography>There is no app definitions</Typography>
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
                  <Link to={`/modeler/apps/${item.id}`}>
                    <AppItem
                      id={item.id}
                      name={item.name}
                      version={item.version}
                    />
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  )
}

export default AppList
