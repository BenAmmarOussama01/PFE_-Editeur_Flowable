import useFetchThumbnail from '../../hooks/useFetchThumbnail'
import Loader from '../loader/Loader'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import CreateIcon from '@mui/icons-material/Create'
import { formatDate } from '../../config/utils/formatDate'
import Box from '@mui/material/Box'
import EditIcon from '@mui/icons-material/Edit'
import SearchIcon from '@mui/icons-material/Search'
import './listItem.css'
import { ModelType } from '../../config/modelType'

export interface ProcessProps {
  name: string
  createdBy: string
  lastUpdated: number
  id: string
  modelType: number
}
const ListItem = ({
  id,
  name,
  createdBy,
  lastUpdated,
  modelType,
}: ProcessProps) => {
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
          <Link to={`viewer/${id}`}>
            <div
              style={{
                objectFit: 'contain',
                width: '100%',
                height: '100%',
                background: `url(${imageSrc}) center top  no-repeat `,
                backgroundSize: `${modelType === ModelType.form ? '90% 90%' : 'auto'}`,
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
          </Link>
          <Box
            className="list-item-icons"
            sx={{
              display: 'none',
              gap: 1,
              position: 'absolute',
              top: 15,
              right: 10,
            }}
          >
            <Box
              sx={{
                bgcolor: 'primary.main',
                p: '3px',
                ':hover': { bgcolor: '#304087' },
              }}
              onClick={() => console.log('test')}
            >
              <Link to={`viewer/${id}`}>
                <SearchIcon sx={{ color: 'white' }} />
              </Link>
            </Box>
            <Box
              sx={{
                bgcolor: 'primary.main',
                p: '3px',
                ':hover': { bgcolor: '#304087' },
              }}
            >
              <Link to={`editor/${id}`}>
                <EditIcon sx={{ color: 'white' }} />
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </>
  )
}

export default ListItem
