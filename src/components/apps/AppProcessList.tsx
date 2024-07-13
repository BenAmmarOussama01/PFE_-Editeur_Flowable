import React from 'react'
import Loader from '../loader/Loader'
import { Grid, Box } from '@mui/material'
import { modalDescriptionByModelType } from '../../config/modelType'
import AppProcessItem from './AppProcessItem'

interface IListAppProcessProps {
  items: any[]
}

const AppProcessList = ({ items }: IListAppProcessProps) => {
  return (
    <Box sx={{ mb: 10 }}>
      {items && (
        <Box>
          {items.length > 0 && (
            <p style={{ marginTop: '1rem' }}>
              There are {items.length} {modalDescriptionByModelType(0)}
            </p>
          )}

          <Grid container spacing={2} sx={{ mb: 13 }}>
            {items.map((item, index) => (
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
                  <AppProcessItem {...item} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  )
}

export default AppProcessList
