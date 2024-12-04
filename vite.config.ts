/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  resolve: {
    alias: {
      '@': '/src',  // Añade un alias para importaciones más limpias
    },
  },
  server: {
    port: 3000,  // Puerto de desarrollo
    open: true,  // Abre automáticamente en el navegador
  },
  build: {
    outDir: 'dist',  // Directorio de salida para la compilación
    sourcemap: true, // Genera sourcemaps para debugging
  }
})
