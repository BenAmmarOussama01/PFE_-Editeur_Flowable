import Box from '@mui/material/Box'
import PersonIcon from '@mui/icons-material/Person'
import CreateIcon from '@mui/icons-material/Create'

import { formatDate } from '../../../config/utils/formatDate'
import useFetchThumbnail from '../../../hooks/useFetchThumbnail'
interface FormProps {
  name: string
  keyy: string
  createdBy: string
  lastUpdated: number
  id: string
  setSelectedForm: (value: string) => void
  handleClose: () => void
}
const FormItem = ({
  name,
  keyy,
  createdBy,
  lastUpdated,
  id,
  setSelectedForm,
  handleClose,
}: FormProps) => {
  const { imageSrc } = useFetchThumbnail(id)

  return (
    <Box
      className="list-item-wrapper"
      sx={{
        border: '1px  rgba(226,232,240,1)',
        height: '20rem',
        width: '268px',
        position: 'relative',
        ':hover': { cursor: 'pointer' },
      }}
      onClick={() => {
        console.log('key : ', keyy)
        setSelectedForm(keyy)
        handleClose()
      }}
    >
      <div
        style={{
          objectFit: 'contain',
          width: '100%',
          height: '100%',
          background: `url(${imageSrc}) center top  no-repeat `,
          backgroundSize: '90% 90%',
          border: '1px solid #E2E8F0',
        }}
      />
      <Box
        sx={{
          bgcolor: 'rgba(241,245,249,1)',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          py: 1,
          pl: 3,
        }}
      >
        <Box>{name}</Box>
        <Box sx={{ mt: 1 }}>
          <PersonIcon /> {createdBy}
        </Box>
        <Box sx={{ mt: 1 }}>
          <CreateIcon /> {formatDate(lastUpdated)}
        </Box>
      </Box>

      <Box
        className="list-item-icons"
        sx={{
          display: 'none',
          gap: 1,
          position: 'absolute',
          top: 15,
          right: 10,
        }}
      ></Box>
    </Box>
  )
}

export default FormItem
