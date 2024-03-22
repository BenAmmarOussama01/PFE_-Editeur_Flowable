import ProcessItem from './ProcessItem'
import { arrayOfXmlProcess } from '../../fakeXml'
/*const arr = [
  {
    id: 1,
    name: 'DIGITAL_ONBOARDING',
    user: 'admin',
    edited: 'Yesterday at 4:52 PM',
  },
  {
    id: 2,
    name: 'DIGITAL_ONBOARDING',
    user: 'admin',
    edited: 'Yesterday at 4:52 PM',
  },
  {
    id: 3,
    name: 'DIGITAL_ONBOARDING',
    user: 'admin',
    edited: 'Yesterday at 4:52 PM',
  },
  {
    id: 4,
    name: 'DIGITAL_ONBOARDING',
    user: 'admin',
    edited: 'Yesterday at 4:52 PM',
  },
  {
    id: 5,
    name: 'DIGITAL_ONBOARDING',
    user: 'admin',
    edited: 'Yesterday at 4:52 PM',
  },
]*/
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
