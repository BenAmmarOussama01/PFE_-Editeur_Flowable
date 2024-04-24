import ProcessItem from './ProcessItem'
import { arrayOfXmlProcess } from '../../fakeXml'
import { useAppSelector } from '../../feature/hooks'
const ProcessList = () => {
  const processes = useAppSelector((state) => state.process.items)
  return (
    <div>
      {processes.length > 0 && (
        <p>There are {processes.length} process models</p>
      )}
      <div className="grid grid-cols-4 gap-4 mr-4">
        {processes.map((item, index) => (
          <ProcessItem {...item} xml={arrayOfXmlProcess[index]} />
        ))}
      </div>
    </div>
  )
}

export default ProcessList
