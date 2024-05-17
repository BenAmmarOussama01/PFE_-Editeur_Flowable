import useFetchThumbnail from '../../hooks/useFetchThumbnail'
import Loader from '../loader/Loader'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import CreateIcon from '@mui/icons-material/Create'
import { formatDate } from '../../config/utils/formatDate'

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
        <div className="border-2 h-80 border-slate-200 hover:cursor-pointer relative w-[268px]">
          <Link to={`${id}`}>
            <div
              style={{
                height: '200px',
                width: '100%',
                background: `url(${imageSrc}) no-repeat center center `,
              }}
            ></div>
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
        </div>
      )}
    </>
  )
}

export default ListItem