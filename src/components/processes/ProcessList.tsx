import ProcessItem from './ProcessItem'
import { arrayOfXmlProcess } from '../../fakeXml'
import { useAppSelector } from '../../feature/hooks'
import Loader from '../loader/Loader'
import { Grid, Box } from '@mui/material'
//import processes from '../../fakeData.json'
const ProcessList = () => {
  const { processes, isLoading } = useAppSelector((state) => state.process)
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      {processes.length > 0 && (
        <p style={{ marginTop: '2rem' }}>
          Il y a {processes.length} modèles de processus
        </p>
      )}
      <Grid container spacing={2} sx={{ mb: 13 }}>
        {processes.map((item, index) => (
          <Grid item key={index}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  zIndex: 1,
                },
              }}
            >
              <ProcessItem {...item} xml={arrayOfXmlProcess[index]} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProcessList
