import ProcessItem from './process_item/ProcessItem'
import { arrayOfXmlProcess } from '../../fakeXml'
import { useAppSelector } from '../../feature/hooks'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { log } from 'console'
const ProcessList = () => {
  const { items, loading } = useAppSelector((state) => state.process)

  return (
    <div>
      {items.length > 0 && <p>There are {items.length} process models</p>}
      <div className="grid grid-cols-4 gap-4 mr-4">
        {items.map((item, index) => (
          <ProcessItem {...item} xml={arrayOfXmlProcess[index]} />
        ))}
      </div>
    </div>
  )
}

export default ProcessList
