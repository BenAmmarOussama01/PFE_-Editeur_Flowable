import DecisionItem from './decision_item/DecisionItem';
import { arrayOfXmlProcess } from '../../fakeXml';
import React, { useState } from 'react';

interface SearchProps {
 arr: Array<any>;
 handleSearch: (value: string) => void; 
}

const DecisionSearchBar: React.FC<SearchProps> = ({ arr, handleSearch }) => {
 const [searchQuery, setSearchQuery] = useState('');

 
 const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
 };

 return (
    <div>
      <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Search..." />
      {arr.length > 0 && <p>There is {arr.length} decision table</p>}
      <div className="grid grid-cols-4 gap-4">
        {arr.map((item, index) => (
          <DecisionItem key={item.id} {...item} xml={arrayOfXmlProcess[index]} />
        ))}
      </div>
    </div>
 );
};

export default DecisionSearchBar;
