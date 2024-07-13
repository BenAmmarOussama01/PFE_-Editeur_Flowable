import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'

import FormsList from '../diagram_editor/formsSelector/FormsList'
import DmnList from '../diagram_editor/dmnselector/DmnList'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflowY: 'scroll',
  overflowX: 'hidden',
  width: 900,
  height: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pb: 4,
  outline: 'none',
}

interface Props {
  open: boolean
  handleClose: () => void
  setSelectedDmn: (value: string) => void
  modelType?: number
}

const SelectDmnModal = ({
  open,
  handleClose,
  modelType,
  setSelectedDmn,
}: Props) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ width: '100%', bgcolor: '#F1F5F9', py: 5, mb: 3 }}>
            <Typography sx={{ fontSize: 25, lineHeight: '2rem', ml: 5 }}>
              Select Decision table
            </Typography>
          </Box>

          <DmnList setSelectedDmn={setSelectedDmn} handleClose={handleClose} />
          <CloseIcon
            color="disabled"
            sx={{ fontSize: 30 }}
            className="absolute top-6 right-3 hover:cursor-pointer"
            onClick={handleClose}
          />
        </Box>
      </Modal>
    </div>
  )
}

export default SelectDmnModal
