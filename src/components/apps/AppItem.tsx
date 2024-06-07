import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { FaStarOfLife } from 'react-icons/fa'
export interface AppProps {
  id: String
  name: string
  version: number
}
const AppItem = ({ id, name, version }: AppProps) => {
  return (
    <div
      style={{
        height: '200px',
        width: '268px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2A9EC0',
        position: 'relative',
        marginBottom: '50px',
      }}
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
      <Box
        sx={{
          p: 2,
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          color: 'white',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
          {name}
        </Typography>
      </Box>
      <FaStarOfLife
        className="icon"
        style={{
          color: '#168AAC',
          fontSize: '6rem',
        }}
      />
    </div>
  )
}

export default AppItem
