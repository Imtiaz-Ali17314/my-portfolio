// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Important for relative paths on ProFreeHost
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Change object to function
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor'
            }
            if (id.includes('framer-motion')) {
              return 'animations'
            }
            return 'vendor'
          }
        }
      }
    }
  }
})