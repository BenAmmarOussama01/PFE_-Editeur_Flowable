import DecisionItem from './decision_item/DecisionItem'
import { arrayOfXmlProcess } from '../../fakeXml'
import { useAppSelector } from '../../feature/hooks'
import { useEffect } from 'react'
import Loader from '../loader/Loader'
const DecisionTableList = () => {
  const decisions = useAppSelector((state) => state.decission.items)
  const isLoading = useAppSelector((state) => state.decission.loading)
  useEffect(()=>{
console.log("is loading .....",isLoading)
  },[isLoading])
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      {decisions.length > 0 && (
        <p>There are {decisions.length} decision Table models</p>
      )}
      <div className="grid grid-cols-4 gap-4 mr-4">
        {decisions.map((item, index) => (
          <DecisionItem {...item} xml={arrayOfXmlProcess[index]} />
        ))}
      </div>
    </div>
  )
}

export default DecisionTableList