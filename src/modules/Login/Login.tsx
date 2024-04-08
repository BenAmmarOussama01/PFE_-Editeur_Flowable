import { FC, useEffect } from 'react'
import './Login.scss'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { invokeWS, MethodHttp } from '../../setup/api-service'
import { APP_BASE_URL } from '../../config/constants/app.constant'

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const login = () => {
    invokeWS({
      url: `${APP_BASE_URL}authorization/`,
      method: MethodHttp.get,
    }).then((response: any) => {
      console.log('response ', response)
      if (response.redirectUrl) {
        document.location.href = response.redirectUrl
      }
    })
  }

  useEffect(() => {
    invokeWS({
      //url: `http://localhost:8070/configuration/users/me`,
      url: `${APP_BASE_URL}configuration/modeler/rest/models?filter=processes&modelType=0&sort=modifiedDesc`,
      method: MethodHttp.get,
    }).then((response: any) => {
      console.log('response ', response)
    })
  }, [])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={login}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  )
}

export default Login
