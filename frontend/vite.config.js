import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        secure: false,
        ws: true,
        // changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, ''),
      },
      '/uploads': 'http://localhost:5000',
    },
  },
})
