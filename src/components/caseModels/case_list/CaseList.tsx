import CaseListItem from './CaseListItem'
import { useAppSelector } from '../../../feature/hooks'

const CaseList = () => {
  const caseModels = useAppSelector((state) => state.case.items)
  return (
    <div>
      {caseModels.length > 0 && (
        <p>There are {caseModels.length} case models</p>
      )}
      <div className="grid grid-cols-4 gap-4 mr-4">
        {caseModels.map((item) => (
          <CaseListItem {...item} />
        ))}
      </div>
    </div>
  )
}

export default CaseList
