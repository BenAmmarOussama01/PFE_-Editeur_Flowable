import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

interface SnackBarProps {
  open: boolean
  handleClose: () => void
  message: string
  feedBackType: 'success' | 'error'
}
const SnackBar = ({
  open,
  handleClose,
  message,
  feedBackType,
}: SnackBarProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={handleClose}
        severity={feedBackType}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default SnackBar
