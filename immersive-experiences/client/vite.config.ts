import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true, // proxy should change the origin to match the target
        secure: false, // proxy should not verify SSL certificate of target (development env)
        rewrite: (path) => path.replace(/^\/api/, ''), // remove /api from the request path
      },
    },
  },
})
