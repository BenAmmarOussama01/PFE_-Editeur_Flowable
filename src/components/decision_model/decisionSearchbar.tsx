import DecisionItem from './decision_item/DecisionItem'
import { arrayOfXmlProcess } from '../../fakeXml'
import React, { useState } from 'react'
//import SearchBar from './SearchBar'
//import fakeData from '../fakeData.json'

interface searchProps {
  arr: Array<any>
}
const [searchQuery, setSearchQuery] = useState('')

const handleSearch = (value: string) => {
  setSearchQuery(value)
}

const DecisionSearchBar = ({ arr }: searchProps) => {
  return (
    <div>
      {arr.length > 0 && <p>There are {arr.length} process models</p>}
      <div className="grid grid-cols-4 gap-4">
        {arr.map((item, index) => (
          <DecisionItem key={item.id} {...item} xml={arrayOfXmlProcess[index]} />
        ))}
      </div>
    </div>
  )
}

export default DecisionSearchBar
