import React from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'

import Typography from '@mui/material/Typography'
import { MethodHttp, invokeWS } from '../../setup/api-service'
import { APP_BASE_URL } from '../../config/app.constant'
import { useNavigate } from 'react-router-dom'

interface DeleteModalProps {
  modelName: string
  modelId: string
  open: boolean
  handleClose: () => void
}
const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pb: 4,
  outline: 'none',
}

const DeleteModal = ({
  open,
  handleClose,
  modelName,
  modelId,
}: DeleteModalProps) => {
  const navigate = useNavigate()

  const handleDeleteProcess = async () => {
    try {
      const result: any = await invokeWS({
        url: `${APP_BASE_URL}configuration/modeler/rest/models/${modelId}`,
        method: MethodHttp.delete,
      })
      navigate('/modeler/processes')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            bgcolor: '#E8EDF1',
            w: '100%',
            py: 5,

            borderBottom: '1px solid #ABB3BF ',
          }}
        >
          <Typography sx={{ fontSize: 35, ml: 3 }}>Delete model</Typography>
        </Box>

        <Box sx={{ borderBottom: '1px solid #ABB3BF ' }}>
          <Typography sx={{ py: 5, ml: 3 }}>
            Are you sure you want to delete the process model "{modelName}"?
          </Typography>
        </Box>
        <Box sx={{ float: 'right', mt: 2, mr: 2, display: 'flex', gap: 2 }}>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: '#C83737' }}
            type="submit"
            onClick={handleDeleteProcess}
          >
            Delete process model
          </Button>
        </Box>

        <CloseIcon
          color="disabled"
          sx={{ fontSize: 30 }}
          className="absolute top-6 right-3 hover:cursor-pointer"
          onClick={handleClose}
        />
      </Box>
    </Modal>
  )
}

export default DeleteModal
