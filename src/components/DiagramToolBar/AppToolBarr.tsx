import Box from '@mui/material/Box'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Loader from '../loader/Loader'
import { formatDate } from '../../config/utils/formatDate'
import Button from '@mui/material/Button'
import SellIcon from '@mui/icons-material/Sell'
import PersonIcon from '@mui/icons-material/Person'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton, Tooltip } from '@mui/material'
import UploadIcon from '@mui/icons-material/Upload'
import DeleteModal from '../modals/DeleteModal'
import EditIcon from '@mui/icons-material/Edit'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import useFetchAppDetails from '../../hooks/useFetchAppDetails'
import { Link } from 'react-router-dom'
import axiosInstance from '../../setup/axiosConfig'
import { ISnackBarState } from '../../types/types'
import SnackBar from '../feedback/SnackBar'
import PublishModal from './PublishModal'
interface AppToolBarrProps {
  id: string
}

const AppToolBarr = ({ id }: AppToolBarrProps) => {
  const [openModal, setOpenModal] = useState(false)
  const [openPublishModal, setOpenPublishModal] = useState(false)
  const [snackBarOpen, setSnackBarOpen] = useState<ISnackBarState>({
    open: false,
    message: '',
    feedBackType: 'success',
  })
  const { details } = useFetchAppDetails(id)

  const handleCloseSnackBar = () => {
    setSnackBarOpen((prev) => ({ ...prev, open: false }))
  }

  const publishApp = async () => {
    try {
      const response = await axiosInstance.post(
        `/configuration/modeler/rest/app-definitions/${id}/publish`,
        { comment: '' },
      )
      console.log('publish response : ', response)
      setSnackBarOpen({
        open: true,
        feedBackType: 'success',
        message: 'Application published successfully!',
      })
      setOpenPublishModal(false)
    } catch (err) {
      setSnackBarOpen({
        open: true,
        feedBackType: 'error',
        message: 'Failed to publish Application!',
      })

      throw err
    }
  }

  return (
    <Box
      sx={{
        backgroundColor: '#E8EDF1', // Corrected from 'bgcolor'
        height: 'auto',
        borderBottom: '1px solid #ABB3BF',
        py: 1,
        px: 5,
        m: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      {!details ? (
        <Loader />
      ) : (
        <>
          <Box
            sx={{
              // position: 'fixed',
              left: 0,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography sx={{ fontSize: 27, alignItems: 'left' }}>
              <span style={{ color: '#2980B9', fontWeight: 'bolder' }}>
                v{details.version}
              </span>
              |{details.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SellIcon fontSize="small" sx={{ mr: 1 }} />
              {details.key}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PersonIcon fontSize="small" sx={{ mr: 1 }} />
              Created by: {details.createdBy}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ModeEditIcon fontSize="small" sx={{ mr: 1 }} />
              Last updated by: {details.lastUpdatedBy} -{' '}
              {formatDate(details.lastUpdatedTimestamp)}
            </Box>
          </Box>

          <Box
            sx={{
              paddingTop: '60px',
              paddingLeft: '110px',
              width: '180px',
              height: '50px',
              flexDirection: 'row',
            }}
          >
            <Typography sx={{ fontWeight: 'bold', width: '180px' }}>
              Description:
            </Typography>
            <Typography sx={{ width: '180px' }}>
              {details.description}
            </Typography>
          </Box>

          <Box
            sx={{
              // position: 'fixed',
              right: 15,
              display: 'flex',
              flexDirection: 'row',
              gap: 0.5,
              height: '10%',
            }}
          >
            <Box
              sx={{
                paddingTop: 1.5,
                paddingRight: 1.5,
                right: 700,
                flexDirection: 'row',
              }}
            >
              <Link to="/modeler/apps" style={{ textDecoration: 'underline ' }}>
                Show all definitions
              </Link>
            </Box>
            <Tooltip title="Modify app definition properites">
              <IconButton color="primary">
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Duplicate this app definition">
              <IconButton color="primary">
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Delete this app definition"
              onClick={() => setOpenModal(true)}
            >
              <IconButton color="primary">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Export app definition as a Zip file">
              <IconButton color="primary">
                <FileDownloadIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Export app definition as a deployable bar file">
              <IconButton color="primary">
                <UploadIcon />
              </IconButton>
            </Tooltip>
            <Button variant="contained" color="primary">
              Import App
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpenPublishModal(true)}
            >
              Publish
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
            >
              App Editor
            </Button>
          </Box>

          {openModal && (
            <DeleteModal
              open={openModal}
              handleClose={() => setOpenModal(false)}
              modelId={id}
              modelName={details.name}
            />
          )}

          {openPublishModal && (
            <PublishModal
              open={openPublishModal}
              handleClose={() => setOpenPublishModal(false)}
              appName={details.name}
              publish={publishApp}
            />
          )}
        </>
      )}
      {snackBarOpen && (
        <SnackBar {...snackBarOpen} handleClose={handleCloseSnackBar} />
      )}
    </Box>
  )
}

export default AppToolBarr
