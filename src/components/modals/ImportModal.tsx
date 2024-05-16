import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

import CloseIcon from '@mui/icons-material/Close'
import FilePicker from '../modals/FilePicker'
import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { APP_BASE_URL } from '../../config/app.constant'
import { MethodHttp, invokeWS } from '../../setup/api-service'
import { getModalDescription } from '../../config/modelType'
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
  modelType: number
}

const ImportModal = ({ open, handleClose, modelType }: Props) => {
  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    console.log(file)
  }, [file])
  const handleImportFile = async () => {
    if (file) {
      try {
        const formData = new FormData()
        formData.append('file', file)

        const url = `${APP_BASE_URL}configuration/modeler/rest/import-process-model`
        const headers = {
          'Content-Type': 'application/octet-stream',
        }
        const result = await axios.post(url, formData, { headers })

        console.log(result)
      } catch (err) {
        console.log(err)
      }
    }
  }

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
            <p className="text-2xl ml-10">
              Import {getModalDescription(modelType)}
            </p>
          </div>
          <FilePicker file={file} setFile={setFile} />

          <Box sx={{ float: 'right', mr: 6, mt: 4 }}>
            <Button
              variant="contained"
              type="submit"
              onClick={handleImportFile}
            >
              Save
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
    </div>
  )
}

export default ImportModal
