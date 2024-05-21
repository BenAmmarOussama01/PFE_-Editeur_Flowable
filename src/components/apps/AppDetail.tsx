import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../feature/hooks';
import Loader from '../loader/Loader';
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import { FaStarOfLife } from 'react-icons/fa';
import { formatDate } from '../../config/utils/formatDate';

const AppDetails = () => {
      const { id } = useParams();
      const { items, loading } = useAppSelector((state) => state.app);
      const item = items.find((item) => item.id === id);

      return (
            <>
                  {loading ? (
                        <Loader />
                  ) : item ? (
                        <div className="border-2 h-80 border-slate-200 hover:cursor-pointer relative w-[268px]">
          <div
            style={{
              height: '200px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#2A9EC0',
              position: 'relative',
            }}
            className="icon-container"
          >
            <div
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                backgroundColor: '#999999',
                padding: '0.2rem 0.5rem',
                borderRadius: '8px',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              v{item.version}
            </div>
            <div className="p-3 hover:pb-10 absolute bottom-0 right-0 left-0 transition duration-300 ease-in-out text-white">
              <div className="text-xl font-bold">{item.name}</div>
            </div>
            <FaStarOfLife
              className="icon"
              style={{
                color: '#168AAC',
                fontSize: '12rem',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
        </div>
                  ) : (
                        <p>Item not found</p>
                  )}
            </>
      );
};

export default AppDetails;