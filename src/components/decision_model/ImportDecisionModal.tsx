import { useState } from "react";
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close'
import FilePicker from './FilePicker'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pb: 4,

  outline: 'none',
}

interface Props {
  open: boolean
  handleClose: () => void
}

const ImportDecisionModal = ({ open, handleClose }: Props) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-full bg-slate-100 py-5 mb-6">
            <p className="text-2xl ml-10">Import a Decision model</p>
          </div>
          <FilePicker />
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

export default ImportDecisionModal
