import { Link } from 'react-router-dom'
import FlowableLogo from '../../assets/flowable-logo.png'
import proxymLogo from '../../assets/proxymlogo.png'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../setup/axiosConfig'
import Button from '@mui/material/Button'

const settings = ['Profile', 'Logout']
interface childrenProps {
  children?: React.ReactNode
}

const NavbarWrapper = ({ children }: childrenProps) => {
  const navigate = useNavigate()
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  )

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLogout = () => {
    axiosInstance
      .post('gw/logout')
      .then((res) => {
        console.log(res)
        handleCloseUserMenu()
        navigate('/')
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: '#16176F', boxShadow: 'none' }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/blocks">
              <img
                src={proxymLogo}
                alt="logo flowable"
                style={{ height: ' 3rem', objectFit: 'contain' }}
              />
            </Link>

            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                height: '100%',
                ml: 20,
              }}
            >
              {children}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem>
                  <Button type="submit">
                    <Typography textAlign="center">Profile</Typography>
                  </Button>
                </MenuItem>
                <form method="POST" action="http://localhost:8070/gw/logout">
                  <MenuItem>
                    <Button type="submit" sx={{ color: 'black' }}>
                      <Typography textAlign="center">Logout</Typography>
                    </Button>
                  </MenuItem>
                </form>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default NavbarWrapper
