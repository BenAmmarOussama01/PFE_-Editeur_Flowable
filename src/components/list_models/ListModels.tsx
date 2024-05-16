import { IProcess } from '../../feature/slices/processes/processSlice'
import Loader from '../loader/Loader'
import { Grid, Box } from '@mui/material'
import ListItem from './ListItem'

interface IListModelsProps {
  isLoading: boolean
  items: IProcess[]
}

const ListModels = ({ isLoading, items }: IListModelsProps) => {
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      {items.length > 0 && (
        <p style={{ marginTop: '2rem' }}>
          Il y a {items.length} modèles de processus
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
              <ListItem {...item} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ListModels
