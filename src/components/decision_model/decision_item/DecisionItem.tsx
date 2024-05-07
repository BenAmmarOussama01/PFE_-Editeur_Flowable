import PersonIcon from '@mui/icons-material/Person'
import CreateIcon from '@mui/icons-material/Create'

//import '../diagram_editor/bpmn.css'
import { Link } from 'react-router-dom'
import { formatDate } from '../../../config/utils/formatDate'
import DecisionItemImage from './DecisionItemImage'

export interface DecisionProps {
  name: string
  createdBy: string
  lastUpdated: number
  id: string
  xml: string
}

const DecisionItem = ({
  id,
  name,
  createdBy,
  lastUpdated,
  xml,
}: DecisionProps) => {
  return (
    <div className="border-2 h-80 border-slate-200 hover:cursor-pointer relative">
      <Link to={`${id}`} state={{ xml }}>
        <DecisionItemImage id={id} />
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
  )
}

export default DecisionItem
