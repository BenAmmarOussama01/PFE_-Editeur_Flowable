import { FC, useEffect } from 'react'
import './Decisions.scss'
import { useAppDispatch } from '../../feature/hooks'
import { getDecisionFetch } from '../../feature/slices/decisions/decisionTableSlice'
import DecisionSearchBar from '../../components/decision_model/decisionSearchbar'
import DecisionTableList from '../../components/decision_model/DecisionTableList'
import Modals from '../../components/modals/Modals'
import { ModelType } from '../../config/modelType'

interface DecisionesProps {}

const Decisions: FC<DecisionesProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getDecisionFetch())
  }, [])
  return (
    <div>
      <Modals modelType={ModelType.decisionTable} />
      <div className="flex gap-10">
        <DecisionSearchBar
          handleSearch={(value: string) => console.log(value)}
          arr={[]}
        />
        <DecisionTableList />
        {/*<DecisionServiceList /> */}
      </div>
    </div>
  )
}

export default Decisions
