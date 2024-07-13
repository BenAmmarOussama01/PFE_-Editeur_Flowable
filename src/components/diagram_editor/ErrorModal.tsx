import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflowX: 'hidden',
  width: 900,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pb: 4,
  outline: 'none',
}
interface Props {
  open: boolean
  handleClose: () => void
  errors?: any[]
  saveProcess: () => void
}

const ErrorModal = ({ open, handleClose, errors, saveProcess }: Props) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              width: '100%',
              bgcolor: '#E85E6C',
              py: 2,
              mb: 3,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ fontSize: 25, color: 'white' }}>
              <HighlightOffIcon sx={{ fontSize: 100 }} />
            </Typography>
          </Box>
          <Box sx={{ mb: 10 }}>
            {errors?.map((item, index) => (
              <Typography
                key={index}
                sx={{ color: '#E85E6C', ml: 5, mt: 2, fontSize: 20 }}
              >
                {item.issue} in {item.task}
              </Typography>
            ))}
          </Box>
          <Button
            sx={{
              backgroundColor: '#E85E6C',
              p: 1,
              position: 'absolute',
              ':hover': {
                backgroundColor: '#E85E6C',
              },
              right: 5,
              bottom: 5,
            }}
            variant="contained"
            onClick={() => {
              saveProcess()
              handleClose()
            }}
          >
            continue saving
          </Button>
          <CloseIcon
            color="disabled"
            sx={{ fontSize: 30, color: 'white' }}
            className="absolute top-6 right-3 hover:cursor-pointer"
            onClick={handleClose}
          />
        </Box>
      </Modal>
    </div>
  )
}

export default ErrorModal
