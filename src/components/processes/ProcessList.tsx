import ProcessItem from './process_item/ProcessItem'
import { arrayOfXmlProcess } from '../../fakeXml'
import { useAppSelector } from '../../feature/hooks'
import Loader from '../loader/Loader'
import { Grid, Box } from '@mui/material'
const ProcessList = () => {
  const { processes, isLoading } = useAppSelector((state) => state.process)
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      {processes.length > 0 && (
        <p>Il y a {processes.length} modèles de processus</p>
      )}
      <Grid container spacing={2}>
        {processes.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              ></Box>
              <ProcessItem {...item} xml={arrayOfXmlProcess[index]} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProcessList
