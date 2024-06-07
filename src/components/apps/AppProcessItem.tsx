import useFetchThumbnail from '../../hooks/useFetchThumbnail'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import CreateIcon from '@mui/icons-material/Create'
import { formatDate } from '../../config/utils/formatDate'
import Box from '@mui/material/Box'
import EditIcon from '@mui/icons-material/Edit'
import SearchIcon from '@mui/icons-material/Search'
import Loader from '../loader/Loader'

export interface IAppProcessItem {
  name: string
  createdBy: string
  lastUpdated: number
  id: string
}

const AppProcessItem = ({
  id,
  name,
  createdBy,
  lastUpdated,
}: IAppProcessItem) => {
  const { imageSrc, isLoading } = useFetchThumbnail(id)

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box
          className="list-item-wrapper"
          sx={{
            border: '1px  rgba(226,232,240,1)',
            height: '20rem',
            width: '268px',
            position: 'relative',
            ':hover': { cursor: 'pointer' },
          }}
        >
          <div
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '100%',
              background: `url(${imageSrc}) no-repeat  `,
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
              py: 3,
              pl: 3,
            }}
          >
            <Box>{name}</Box>
            <Box sx={{ mt: 2 }}>
              <PersonIcon /> {createdBy}
            </Box>
            <Box sx={{ mt: 2 }}>
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
      )}
    </>
  )
}

export default AppProcessItem
