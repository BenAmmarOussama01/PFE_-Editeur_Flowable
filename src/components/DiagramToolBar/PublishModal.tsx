import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import React from 'react'

import CloseIcon from '@mui/icons-material/Close'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pb: 3,
  outline: 'none',
}

interface Props {
  open: boolean
  handleClose: () => void
  appName: string
  publish: () => void
}

const PublishModal = ({ open, handleClose, appName, publish }: Props) => {
  return (
    <Box>
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
              py: 2,

              borderBottom: '1px solid #ABB3BF ',
            }}
          >
            <Typography sx={{ fontSize: 35, ml: 3 }}>
              Publish app definition
            </Typography>
          </Box>

          <Box sx={{ borderBottom: '1px solid #ABB3BF ' }}>
            <Typography sx={{ py: 5, ml: 3 }}>
              Are you sure you want to publish the app definition "BNA" ? Note
              that this app definition will be versioned and the workflow app
              will be updated if existing already.
            </Typography>
          </Box>
          <Box sx={{ float: 'right', mt: 2, mr: 2, display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{ bgcolor: '#3990C9' }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: '#d35f5f' }}
              type="submit"
              onClick={publish}
            >
              Publish app definition
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
    </Box>
  )
}

export default PublishModal
