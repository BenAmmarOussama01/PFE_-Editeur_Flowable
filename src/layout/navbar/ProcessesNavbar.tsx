import { Link, useLocation } from 'react-router-dom'
import NavbarWrapper from './NavbarWrapper'
import Button from '@mui/material/Button'

const navItems = [
  { id: 1, text: 'Processes', link: '/modeler/processes' },
  { id: 2, text: 'Case models', link: 'caseModels' },
  { id: 3, text: 'Forms', link: '/modeler/form' },
  { id: 4, text: 'Decisions', link: '/modeler/decisions' },
  { id: 5, text: 'Apps', link: '/modeler/apps' },
]

const ProcessesNavbar = () => {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <NavbarWrapper>
      {navItems.map((item) => (
        <Link
          to={item.link}
          style={{ textDecoration: 'none', color: 'inherit' }}
          key={item.id}
        >
          <Button
            key={item.id}
            sx={{
              p: 2.5,
              color: 'white',
              display: 'block',
              bgcolor: `${pathname.includes(item.link) ? '#000' : 'none'}`,
              fontSize: 15,
              ':hover': {
                bgcolor: '#000',
              },
            }}
          >
            {item.text}
          </Button>
        </Link>
      ))}
    </NavbarWrapper>
  )
}

export default ProcessesNavbar
