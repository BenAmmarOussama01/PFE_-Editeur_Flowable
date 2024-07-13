import Box from '@mui/material/Box'
import useFetchProcessDetails from '../../hooks/useFetchDetails'
import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Loader from '../loader/Loader'
import { formatDate } from '../../config/utils/formatDate'
import Button from '@mui/material/Button'

import SellIcon from '@mui/icons-material/Sell'
import PersonIcon from '@mui/icons-material/Person'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DownloadIcon from '@mui/icons-material/Download'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteIcon from '@mui/icons-material/Delete'
import DeleteModal from '../modals/DeleteModal'
import { Link } from 'react-router-dom'
import useFetchDetails from '../../hooks/useFetchDetails'

interface ToolBarProps {
  id: string
}

const details = {
  key: 'age_validation',
  createdBy: 'bkdev bkdev',
  lastUpdated: 1719856957715,
  lastUpdatedBy: 'bkdev bkdev',
  version: 1,
  name: 'age_validation_decision',
  description: '',
}

const ViewerToolBar = ({ id }: ToolBarProps) => {
  const [openModal, setOpenModal] = useState(false)
  //const { details } = useFetchDetails(id)

  const handleEditClick = () => {
    const currentUrl = window.location.href
    const newUrl = currentUrl.replace('viewer', 'editor')
    window.location.href = newUrl
  }

  return (
    <Box
      sx={{
        bgcolor: '#E8EDF1',
        height: 150,
        borderBottom: '1px solid #ABB3BF ',
        px: 20,
      }}
    >
      {!details ? (
        <Loader />
      ) : (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 1 }}>
            <Box>
              <Typography sx={{ fontSize: 25 }}>
                <span style={{ color: '#2980B9', fontWeight: 'bolder' }}>
                  v{details.version}
                </span>
                |{details.name}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button variant="contained">
                <DownloadIcon />
              </Button>
              <Button variant="contained" onClick={() => setOpenModal(true)}>
                <DeleteIcon />
              </Button>

              <Button variant="contained" onClick={handleEditClick}>
                <BorderColorIcon />
                Visual Editor
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 20, mt: 1 }}>
            <Box
              sx={{
                fontSize: 15,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Box>
                <SellIcon fontSize="small" sx={{ mr: 1 }} />
                {details.key}
              </Box>
              <Box>
                <PersonIcon fontSize="small" sx={{ mr: 1 }} />
                Created by {details.createdBy}
              </Box>
              <Box>
                <ModeEditIcon fontSize="small" sx={{ mr: 1 }} />
                Last updated by {details.lastUpdatedBy} -{' '}
                {formatDate(details.lastUpdated)}
              </Box>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 'bold' }}>Description:</Typography>
              <Typography>{details.description}</Typography>
            </Box>
          </Box>
          {openModal && (
            <DeleteModal
              open={openModal}
              handleClose={() => setOpenModal(false)}
              modelId={id}
              modelName={details.name}
            />
          )}
        </>
      )}
    </Box>
  )
}

export default ViewerToolBar
