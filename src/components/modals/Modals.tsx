import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import NewModal from './NewModal'
import ImportModal from './ImportModal'
import {
  ModelType,
  modalDescriptionByModelType,
  modalNameByModelType,
} from '../../config/modelType'

interface ModalsProps {
  modelType: number
}

const Modals = ({ modelType }: ModalsProps) => {
  const [openModal, setOpenModal] = useState(0)
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          justifyItems: 'center',
          p: 5,
          bgcolor: '#E2E8F0',
          borderColor: '#E2E8F0',
        }}
      >
        <Typography fontSize={25}>
          {modalDescriptionByModelType(modelType)}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" onClick={() => setOpenModal(1)}>
            Create {modalNameByModelType(modelType)}
          </Button>
          <Button variant="contained" onClick={() => setOpenModal(2)}>
            Import {modalNameByModelType(modelType)}
          </Button>
        </Box>
      </Box>
      <NewModal
        open={openModal === 1}
        handleClose={() => setOpenModal(0)}
        modelType={modelType}
      />

      <ImportModal open={openModal === 2} handleClose={() => setOpenModal(0)} />
    </div>
  )
}

export default Modals
