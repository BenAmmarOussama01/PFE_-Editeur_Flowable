
import AppItem from './AppItem';
import { useParams } from 'react-router-dom';
import { Box, Divider, Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import AppToolBarr from '../DiagramToolBar/AppToolBarr';
import ListModels from '../list_models/ListModels';
import { ModelType } from '../../config/modelType';
import useFetchAppDetails from '../../hooks/useFetchAppDetails';
import { useEffect } from 'react';
interface Item {
  id: string;
}
const App = () => {
 
 let { id } = useParams(); 
  const {details}= useFetchAppDetails(id!);
  console.log('details',details)
 
let loading =false;
  const item = {name:"test", version :1 , id:"test"}
  useEffect(() => {
   
    if (details){
      console.log('fetching',details.definition.models  )

    }
  }, [details])
 
    console.log('item app:', item)
    //console.log('listModal',item.appDefinition.models)
    console.log(loading)
  return (
    <Box className="h-full w-full relative" sx={{ p: 1}}>
    {item && <AppToolBarr id={item.id} />}
    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
      <Typography variant="h4">App definition details: {item?.name}</Typography>
      <Divider sx={{ my: 2 }} />
      {item ? (
        <>
          <Grid container spacing={2} > 
            <Grid item xs={12} md={6}>
              <AppItem id={item.id} name={item.name} version={item.version} />
            </Grid>
  
          </Grid>
          <Typography variant="h5"sx={{ mt: '10px' }} >Models included in the app definition:</Typography>
          <Divider sx={{ my: 2 }} />
          <Tabs value={0} indicatorColor="primary" textColor="primary">
            <Tab label="BPMN models" />
            <Tab label="CMMN models" />
          </Tabs>
          <Grid  >
          <ListModels
          isLoading={loading}
          items={[]}
          modelType={ModelType.app}
        />
        </Grid>
        </>
      ):(
        <Typography variant="h6">Item not found</Typography>
      )}
    </Paper>
  </Box>
  );
};

export default App;
