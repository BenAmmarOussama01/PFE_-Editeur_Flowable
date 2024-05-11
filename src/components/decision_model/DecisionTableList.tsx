import DecisionItem from './decision_item/DecisionItem'
import { arrayOfXmlProcess } from '../../fakeXml'
import { useAppSelector } from '../../feature/hooks'
import { useEffect } from 'react'
import Loader from '../loader/Loader'
import { Grid, Box } from '@mui/material'
const DecisionTableList = () => {
  const decisions = useAppSelector((state) => state.decision.items)
  const isLoading = useAppSelector((state) => state.decision.loading)
  useEffect(()=>{
console.log("is loading .....",isLoading)
  },[isLoading])

  return isLoading ? (
    <Loader />
  ) : (
   

    <div>
      {decisions.length > 0 && (
        <p>Il y a {decisions.length} modèles de tables de décision</p>
      )}
      <Grid container spacing={2}>
        {decisions.map((item, index) => (
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
                <div>Contenu de la popup pour la table de décision</div>
              </Box>
              <DecisionItem {...item} xml={arrayOfXmlProcess[index]} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
   
  )
}

export default DecisionTableList