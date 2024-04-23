import ProcessItem from './ProcessItem'
import { arrayOfXmlProcess } from '../../fakeXml'
interface listProps {
  arr: Array<any>
}
const ProcessList = ({ arr }: listProps) => {
  console.log(arr)
  return (
    <div>
      {arr.length > 0 && <p>There are {arr.length} process models</p>}
      <div className="grid grid-cols-4 gap-4">
        {arr.map((item, index) => (
          <ProcessItem key={item.id} {...item} xml={arrayOfXmlProcess[index]} />
        ))}
      </div>
    </div>
  )
}

export default ProcessList
