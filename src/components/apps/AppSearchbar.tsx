
import React, { useState } from 'react';
import AppItem from './AppItem';

interface SearchProps {
 arr: Array<any>;
 handleSearch: (value: string) => void; 
}

const AppSearchBar: React.FC<SearchProps> = ({ arr, handleSearch }) => {
 const [searchQuery, setSearchQuery] = useState('');

 
 const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
 };

 return (
    <div>
      <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Search..." />
      {arr.length > 0 && <p>There is {arr.length} AppItem</p>}
      <div className="grid grid-cols-4 gap-4">
        {arr.map((item, index) => (
          <AppItem key={item.id} {...item} />
        ))}
      </div>
    </div>
 );
};

export default AppSearchBar;
