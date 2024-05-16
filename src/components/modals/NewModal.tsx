import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../feature/hooks'
import { createProcess } from '../../feature/slices/processes/processSlice'
import { Typography } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pb: 2,
  outline: 'none',
}

const loginValidationSchema = Yup.object({
  name: Yup.string().required('name is required'),
  key: Yup.string().required('key is required'),
  description: Yup.string(),
})

interface NewModalProps {
  open: boolean
  handleClose: () => void
  modelType: number
  //setArr?: (process: any) => void
}

const NewModal = ({ open, handleClose, modelType }: NewModalProps) => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector((state) => state.process)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      key: '',
      description: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      dispatch(
        createProcess({
          ...values,
          onComplit: (res: any) => {
            navigate(`${res.id}`)
          },
          modelType,
        }),
      )
    },
  })

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="w-full bg-slate-100 py-5 mb-6">
          <p className="text-2xl ml-10">Create a new Process model</p>
        </div>
        <form action="" className="mx-10" onSubmit={formik.handleSubmit}>
          <div>
            <label className="text-xl">Model name*</label>
            <TextField
              variant="outlined"
              className="w-full"
              id="name"
              name="name"
              autoComplete="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </div>

          <div className="mt-3">
            <label className="text-xl">Key*</label>
            <TextField
              variant="outlined"
              className="w-full"
              id="key"
              name="key"
              autoComplete="key"
              value={formik.values.key}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.key && Boolean(formik.errors.key)}
              helperText={formik.touched.key && formik.errors.key}
            />
          </div>

          <div className="mt-3">
            <Typography>Description</Typography>
            <TextField
              variant="outlined"
              className="w-full"
              multiline
              rows={3}
              id="description"
              name="description"
              autoComplete="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </div>
          <div className="mt-10 flex gap-4 float-end">
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
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
  )
}

export default NewModal
