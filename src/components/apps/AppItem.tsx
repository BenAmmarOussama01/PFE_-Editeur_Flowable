import { Link } from 'react-router-dom';

import { FaStarOfLife } from 'react-icons/fa';
export interface AppProps {
  id:String,
  name:string,
  version:number
}
const AppItem = ({
  id,
  name,
  version
}: AppProps) => {
     
      return (
            <>
               { /*  {loading ? (
                        <Loader />
                  ) : item ? (*/}
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
              V{version}
            </div>
            <div className="p-3 hover:pb-10 absolute bottom-0 right-0 left-0 transition duration-300 ease-in-out text-white">
              <div className="text-xl font-bold">{name}</div>
            </div>
            <FaStarOfLife
              className="icon"
              style={{
                color: '#168AAC',
                fontSize: '6rem',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
        </div>
            </>
      );
};

export default AppItem;