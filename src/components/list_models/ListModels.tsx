import { IProcess } from '../../feature/slices/processes/processSlice'
import Loader from '../loader/Loader'
import { Grid, Box } from '@mui/material'
import ListItem from './ListItem'
import { modalDescriptionByModelType } from '../../config/modelType'

interface IListModelsProps {
  isLoading: boolean
  items: any[]
  modelType: number
}

const ListModels = ({ isLoading, items, modelType }: IListModelsProps) => {
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      {items.length > 0 && (
        <p style={{ marginTop: '2rem' }}>
          There are {items.length} {modalDescriptionByModelType(modelType)}
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
              <ListItem {...item}  />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ListModels
