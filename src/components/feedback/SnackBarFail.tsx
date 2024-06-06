import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

interface SnackBarProps {
  open: boolean
  handleClose: () => void
}

const SnackBarFail = ({ open, handleClose }: SnackBarProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: '100%' }}
      >
        Fail to save Process!
      </Alert>
    </Snackbar>
  )
}

export default SnackBarFail
