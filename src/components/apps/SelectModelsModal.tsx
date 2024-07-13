import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import React from 'react'

import CloseIcon from '@mui/icons-material/Close'
import Grid from '@mui/material/Grid'
import SelectProcessItem from './SelectProcessItem'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -56%)',
  width: 1000,
  height: 600,
  bgcolor: 'background.paper',
  overflowX: 'scroll',
  boxShadow: 24,
  pb: 4,
  outline: 'none',
}

interface Props {
  open: boolean
  handleClose: () => void
  items: any[]
  handleModelClick: (id: any) => void
  selectedModels: any[]
}

const SelectModelsModal = ({
  open,
  handleClose,
  items,
  handleModelClick,
  selectedModels,
}: Props) => {
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
              width: '100%',
              bgcolor: '#E8EDF1',
              py: '35px',
              mb: '24px',
            }}
          >
            <Typography
              sx={{
                fontSize: '1.9rem',
                lineHeight: '2rem',
                ml: '20px',
                fontWeight: 500,
              }}
            >
              Models included in the app definition
            </Typography>
          </Box>

          <Box sx={{ overflowY: 'scroll', overflowX: 'hidden' }}>
            <Grid container spacing={2} sx={{ mb: 13, ml: 1 }}>
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
                    <SelectProcessItem
                      {...item}
                      handleModelClick={handleModelClick}
                      selectedModels={selectedModels}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <CloseIcon
            color="disabled"
            sx={{
              fontSize: 20,
              position: 'absolute',
              top: '24px',
              right: '12px',
              ':hover': { cursor: 'pointer' },
            }}
            onClick={handleClose}
          />
        </Box>
      </Modal>
    </Box>
  )
}

export default SelectModelsModal
