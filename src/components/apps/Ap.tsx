import React from 'react';
import AppItem from './AppItem';
import { useAppSelector } from '../../feature/hooks';
import { useSearchParams } from 'react-router-dom';

const App = () => {
  const { items} = useAppSelector((state) => state.app);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  
  
  // Check if item exists before rendering AppItem
  const item = items.find((item) => item.id === id);

  return (
    <>
      {item ? <AppItem id={item.id} name={item.name} version={item.version}  /> : <div>Item not found</div>}
    </>
  );
}

export default App;
