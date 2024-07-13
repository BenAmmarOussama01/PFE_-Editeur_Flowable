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
import { APP_BASE_URL } from '../../config/app.constant'
import axios from 'axios'
import proxymLogo from '../../assets/proxymDark.png'

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const login = () => {
    invokeWS({
      url: `/authorization/`,
      method: MethodHttp.get,
    })
      .then((response: any) => {
        console.log('login res:', response.headers)

        if (response.data.redirectUrl) {
          document.location.href = response.data.redirectUrl
        }
      })
      .catch((err: any) => {
        console.log('login err:', err)
      })
  }

  useEffect(() => {
    /*invokeWS({
      //url: `http://localhost:8070/configuration/users/me`,
      url: `${APP_BASE_URL}configuration/modeler/rest/models?filter=processes&modelType=0&sort=modifiedDesc`,
      method: MethodHttp.get,
    }).then((response: any) => {
      console.log('response ', response)
    })*/
    axios
      .get(`http://localhost:8070/configuration/users/me`)
      .then((response: any) => {
        document.location.href = 'blocks'
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
        <Box sx={{ mt: 20 }}>
          <img
            src={proxymLogo}
            alt="logo flowable"
            style={{ height: ' 3rem', objectFit: 'contain' }}
          />
        </Box>

        <form
          method="GET"
          action="http://localhost:8070/authorization/"
          style={{ width: '60%' }}
        >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  )
}

export default Login
