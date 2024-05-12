import DecisionItem from './decision_item/DecisionItem'
import { arrayOfXmlProcess } from '../../fakeXml'
import { useAppSelector } from '../../feature/hooks'
import Loader from '../loader/Loader'
const DecisionServiceList = () => {
  const decisions = useAppSelector((state) => state.decisionService.items)
  const isLoading = useAppSelector((state) => state.decision.loading)
  
  return (
    <div>
      {decisions.length > 0 && (
        <p>There are {decisions.length} decision Service models</p>
      )}
      <div className="grid grid-cols-4 gap-4 mr-4">
        {decisions.map((item, index) => (
          <DecisionItem {...item} xml={arrayOfXmlProcess[index]} />
        ))}
      </div>
    </div>
  )
}

export default DecisionServiceList