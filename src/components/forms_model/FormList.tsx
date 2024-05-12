;
import { arrayOfXmlProcess } from '../../fakeXml';
import { useAppSelector } from '../../feature/hooks';
import Loader from '../loader/Loader';
import FormItem from './form_item/FormItem';
import { Grid, Box } from '@mui/material';

const FormList = () => {

  const isLoading = useAppSelector((state) => state.form.loading)
  const formes = useAppSelector((state) => state.form.items);

  
  return isLoading ? (
    <Loader />
  ) : (
     

<div>
  {formes.length > 0 && (
    <p>Il y a {formes.length} modèles de formulaire</p>
  )}
  <Grid container spacing={2}>
    {formes.map((item, index) => (
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
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 1,
              },
            }}
          >
          </Box>
          <FormItem {...item} xml={arrayOfXmlProcess[index]} />
        </Box>
      </Grid>
    ))}
  </Grid>
</div>

  );}

export default FormList;