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

export interface ProcessProps {
  name: string
  createdBy: string
  lastUpdated: number
  id: string
}
const ListItem = ({ id, name, createdBy, lastUpdated }: ProcessProps) => {
  const { imageSrc, isLoading } = useFetchThumbnail(id)
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="border-2 h-80 border-slate-200 hover:cursor-pointer relative w-[268px] list-item-wrapper">
          <Link to={`viewer/${id}`}>
            <div
              style={{
                height: '200px',
                width: '100%',
                background: `url(${imageSrc}) no-repeat center center `,
                border: '1px solid #E2E8F0',
              }}
            />
            <div className="bg-slate-100 p-3 hover:pb-10 absolute bottom-0 right-0 left-0 transition duration-300 ease-in-out">
              <div>{name}</div>
              <div className="flex items-center gap-2 mt-3">
                <PersonIcon /> {createdBy}
              </div>
              <div className="flex items-center gap-2 mt-3 ">
                <CreateIcon /> {formatDate(lastUpdated)}
              </div>
            </div>
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
            <Box sx={{ bgcolor: 'primary.main', p: '3px' }}>
              <SearchIcon sx={{ color: 'white' }} />
            </Box>
            <Box sx={{ bgcolor: 'primary.main', p: '3px' }}>
              <EditIcon sx={{ color: 'white' }} />
            </Box>
          </Box>
        </div>
      )}
    </>
  )
}

export default ListItem
