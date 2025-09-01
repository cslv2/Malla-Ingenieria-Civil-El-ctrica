// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ usa EXACTAMENTE el nombre del repositorio de GitHub
export default defineConfig({
  plugins: [react()],
  base: '/Malla-Ingenieria-Civil-El-ctrica/', 
})
