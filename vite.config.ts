import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/degoke/',
  server:{
    proxy:{
      // '/api':'http:/localhost:5000'
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        // If your API doesn't use the /api prefix, you might need rewrite
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
