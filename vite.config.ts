import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    publicDir: 'assets',
    resolve: {},
    server: {
      port: 8070,
      proxy: {
        '/oauth2': {
          target: 'http://localhost:8081',
          changeOrigin: true,
          xfwd: true,
        },
        '/authorization': {
          target: 'http://localhost:8081',
          changeOrigin: true,
          xfwd: true,
        },
        '/gw': {
          target: 'http://localhost:8081',
          changeOrigin: true,
          xfwd: true,
        },
      },
    },
  }
})
