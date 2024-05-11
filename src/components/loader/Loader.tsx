import React from 'react';
import { CircularProgress } from '@mui/material';

const Loader: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 9999, // Assurez-vous que le loader est au-dessus de tout le reste
    }}>
      <CircularProgress style={{ width: '100px', height: '100px', color: '#3B4B95' }} thickness={4} />
    </div>
  );
}

export default Loader;
