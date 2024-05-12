//import { useState } from "react";
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'
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

interface NewFormModalProps {
  open: boolean
  handleClose: () => void
  //setArr?: (process: any) => void
}

const NewFormModal = ({ open, handleClose }: NewFormModalProps) => {
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
            <p className="text-2xl ml-10">Create a Form </p>
          </div>
          <form action="" className="mx-10">
            <div>
              <label className="text-xl">Name*</label>
              <TextField variant="outlined" className="w-full" />
            </div>

            <div className="mt-5">
              <label className="text-xl">Key*</label>
              <TextField variant="outlined" className="w-full" />
            </div>

            <div className="mt-5">
              <label className="text-xl">Description</label>
              <TextField
                variant="outlined"
                className="w-full"
                multiline
                rows={5}
              />
            </div>
            <div className="mt-10 flex gap-4 float-end">
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                /*onClick={() => {
                  let date = new Date()
                  let minutes = date.getMinutes()
                  let hour = date.getHours()

                  setArr({
                    id: 7,
                    name: 'DIGITAL_ONBOARDING',
                    user: 'admin',
                    edited: `${hour} : ${minutes}`,
                  })
                  handleClose()
                }}*/
              >
                Save
              </Button>
            </div>
          </form>
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

export default NewFormModal
