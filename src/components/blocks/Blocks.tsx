import React from 'react'
import { Grid, Card, CardContent, Typography, styled } from '@mui/material'
import { FaListUl, FaUser, FaStarOfLife } from 'react-icons/fa'
import { FaDiagramProject } from 'react-icons/fa6'
import { FaWrench } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import NavbarWrapper from '../../layout/navbar/NavbarWrapper'

interface StyledIconProps {
  icon: React.ElementType
}
const StyledIcon = styled(({ icon: Icon, ...props }: StyledIconProps) => (
  <Icon {...props} />
))(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '7rem',
  marginBottom: 'auto',
  marginLeft: '50%',
  opacity: 0.5,
}))
const items = [
  { name: 'Task App', link: 'tasks' },
  { name: 'Modeler App', link: 'modeler/processes' },
  { name: 'Admin App', link: 'admin' },
  { name: 'IDM App', link: 'idm' },
  { name: 'Test App', link: 'test' },
  { name: 'BNA-RETAIL', link: 'bna-retail' },
]

const cardIcons = [
  FaListUl,
  FaDiagramProject,
  FaWrench,
  FaUser,
  FaStarOfLife,
  FaStarOfLife,
]

const backgroundcolors = [
  '#C6B6FB',
  '#FEE895',
  '#ABC8E2',
  '#8C8BA8',
  '#B1CEFF',
  '#B1CEFF',
]

const Blocks: React.FC = () => {
  const StyledCard = styled(Card)({
    '&:hover': {
      boxShadow: '0 0 10px rgba(0, 0, 0, 2)',
    },
  })
  const CardContentWrapper = styled(CardContent)(({ theme, bg }: { theme: any, bg: string }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '100%',
    backgroundColor: bg,
    '&:hover': {
      backgroundColor: 'lightgray',
    },
  }))
  return (
    <>
      <NavbarWrapper />
      <Grid container spacing={2} padding={2}>
        {items.map(({ name, link }, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Link style={{ textDecoration: 'none' }} to={link}>
              <StyledCard>
                <CardContentWrapper bg={backgroundcolors[index]} theme={undefined}>
                  <Typography variant="h5">{name}</Typography>
                  <StyledIcon icon={cardIcons[index]} />
                </CardContentWrapper>
              </StyledCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Blocks
