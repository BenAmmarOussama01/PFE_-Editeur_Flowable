import { Grid, styled } from '@mui/material'
import React from 'react'

// Styled component for the item
const StyledItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2), // Add padding using theme spacing
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const blocks = ({ itemCount = 6, itemSize = 2 }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {/* Generate Grid items dynamically */}
      {Array.from(Array(itemCount)).map((_, index) => (
        <Grid
          item
          xs={itemSize}
          sm={itemSize * 2}
          md={itemSize * 2}
          key={index}
        >
          <StyledItem>Item {index + 1}</StyledItem>
        </Grid>
      ))}
    </Grid>
  )
}

export default blocks
