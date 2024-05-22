
import Loader from '../loader/Loader';
import { Grid, Box } from '@mui/material';
import AppItem from './AppItem';
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../feature/hooks';
const AppList = () => {
  const { items, loading } = useAppSelector((state) => state.app);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <> 
          {items.length > 0 ? (
            <p style={{ marginTop: '2rem' }}>
              Il y a {items.length} définitions d'apps 
            </p>
          ) : (
            <p>Aucune application trouvée.</p> 
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
                    <AppItem id={item.id} name={item.name} version={item.version}/>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default AppList;
