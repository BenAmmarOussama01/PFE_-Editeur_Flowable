import AppItem from './AppItem'
import { useParams } from 'react-router-dom'
import { Box, Divider, Grid, Paper, Tab, Tabs, Typography } from '@mui/material'
import AppToolBarr from '../DiagramToolBar/AppToolBarr'
import ListModels from '../list_models/ListModels'
import { ModelType } from '../../config/modelType'
import useFetchAppDetails from '../../hooks/useFetchAppDetails'
import AppProcessList from './AppProcessList'
interface Item {
  id: string
}
const App = () => {
  let { id } = useParams()
  const { isLoading, details } = useFetchAppDetails(id!)

  return (
    <Box>
      {details && <AppToolBarr id={details.id} />}
      <Paper elevation={3} sx={{ p: 5, mb: 2 }}>
        <Typography variant="h4">
          App definition details: {details?.name}
        </Typography>
        <Divider sx={{ my: 2 }} />
        {details ? (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <AppItem
                  id={details.id}
                  name={details.name}
                  version={details.version}
                />
              </Grid>
            </Grid>
            <Typography variant="h5" sx={{ mt: '10px' }}>
              Models included in the app definition:
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Tabs value={0} indicatorColor="primary" textColor="primary">
              <Tab label="BPMN models" />
            </Tabs>
            <Grid>
              <AppProcessList items={details.definition.models} />
            </Grid>
          </>
        ) : (
          <Typography variant="h6">Item not found</Typography>
        )}
      </Paper>
    </Box>
  )
}

export default App
