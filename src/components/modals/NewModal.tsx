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
import { getModalDescription } from '../../config/modelType'
import { useEffect, useState } from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
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
  const [error, setError] = useState(false)
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
            navigate(`editor/${res.id}`)
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
        <Box
          className="w-full bg-slate-100 py-5 mb-6"
          sx={{
            width: '100%',
            bgcolor: 'rgb( 241 245 249 / 1) ',
            py: '20px',
            mb: '24px',
          }}
        >
          <Typography
            sx={{ fontSize: '1.5rem', lineHeight: '2rem', ml: '40px' }}
          >
            Create a new {getModalDescription(modelType)}
          </Typography>
        </Box>
        <form
          action=""
          style={{ margin: '0 40px' }}
          onSubmit={formik.handleSubmit}
        >
          {error && (
            <Box
              sx={{
                backgroundColor: '#EC8A77 !important',
                width: '100%',
                py: 1,
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                alignItems: 'center',
                mb: 2,
              }}
            >
              <ErrorOutlineIcon sx={{ color: '#E4593D' }} />
              <Typography>Provided model key already exists</Typography>
            </Box>
          )}

          <Box>
            <Typography> {getModalDescription(modelType)} name*</Typography>
            <TextField
              variant="outlined"
              sx={{ width: '100%' }}
              id="name"
              name="name"
              autoComplete="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Box>

          <Box sx={{ mt: '12px' }}>
            <Typography> {getModalDescription(modelType)} Key*</Typography>
            <TextField
              variant="outlined"
              sx={{ width: '100%' }}
              id="key"
              name="key"
              autoComplete="key"
              value={formik.values.key}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.key && Boolean(formik.errors.key)}
              helperText={formik.touched.key && formik.errors.key}
            />
          </Box>

          <Box sx={{ mt: '12px' }}>
            <Typography>Description</Typography>
            <TextField
              variant="outlined"
              sx={{ width: '100%' }}
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
          </Box>
          <Box
            className="mt-10 flex gap-4 float-end"
            sx={{
              mt: '40px',
              display: 'flex',
              gap: '1rem',
              float: 'inline-end',
            }}
          >
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Box>
        </form>
        <CloseIcon
          color="disabled"
          sx={{
            fontSize: 30,
            position: 'absolute',
            top: '24px',
            right: '12px',
            ':hover': { cursor: 'pointer' },
          }}
          onClick={handleClose}
        />
      </Box>
    </Modal>
  )
}

export default NewModal
