import AppItem from './AppItem'
import { useParams } from 'react-router-dom'
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import AppToolBarr from '../DiagramToolBar/AppToolBarr'
import ListModels from '../list_models/ListModels'
import { ModelType } from '../../config/modelType'
import useFetchAppDetails from '../../hooks/useFetchAppDetails'
import AppProcessList from './AppProcessList'
import { useAppSelector, useAppDispatch } from '../../feature/hooks'
import { useEffect, useState } from 'react'
import { getProcess } from '../../feature/slices/processes/processSlice'
import SelectModelsModal from './SelectModelsModal'

interface Item {
  id: string
}
const App = () => {
  let { id } = useParams()

  const [openModal, setOpenModal] = useState(false)

  const { isLoading, details } = useFetchAppDetails(id!)

  const [selectedModels, setSelectedModels] = useState<any[]>([])

  const dispatch = useAppDispatch()
  const { processes } = useAppSelector((state) => state.process)

  useEffect(() => {
    dispatch(getProcess({ searchText: '' }))
  }, [])

  useEffect(() => {
    if (details?.definition.models) {
      setSelectedModels(details?.definition.models)
      console.log('worked')
    }
    console.log('models:', details?.definition.models)
  }, [details])

  // Function to handle model selection
  const handleModelClick = (model: any) => {
    var isSelected = false
    for (let i = 0; i < selectedModels.length; i++) {
      if (selectedModels[i].id == model) {
        isSelected = true
        break
      }
    }

    if (isSelected) {
      setSelectedModels(
        selectedModels.filter((selectedModel) => selectedModel.id !== model),
      )
    } else {
      const modelToAdd = processes.find((item) => item.id === model)
      setSelectedModels([...selectedModels, modelToAdd])
    }
  }

  useEffect(() => {
    console.log(selectedModels)
  }, [selectedModels])
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
            <Button
              variant="contained"
              sx={{ mb: 2 }}
              onClick={() => {
                setOpenModal(true)
              }}
            >
              Edit included models
            </Button>
            <Tabs value={0} indicatorColor="primary" textColor="primary">
              <Tab label="BPMN models" />
            </Tabs>
            <Grid>
              <AppProcessList items={selectedModels} />
            </Grid>
          </>
        ) : (
          <Typography variant="h6">Item not found</Typography>
        )}

        {openModal && (
          <SelectModelsModal
            open={openModal}
            handleClose={() => setOpenModal(false)}
            items={processes}
            handleModelClick={handleModelClick}
            selectedModels={selectedModels}
          />
        )}
      </Paper>
    </Box>
  )
}

export default App
