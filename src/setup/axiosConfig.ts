import axios, { AxiosInstance } from 'axios'
import { APP_BASE_URL } from '../config/app.constant'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: APP_BASE_URL,
})

const configureAxiosInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        // Redirect to login page if unauthorized
        document.location.href = '/'
      }

      return Promise.reject(error)
    },
  )
}

configureAxiosInterceptors(axiosInstance)

export default axiosInstance
