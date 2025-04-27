import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  root: path.resolve(__dirname), // Explicitly set root to the frontend folder
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    outDir: '../dist', // Output to parent directory's dist folder
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})