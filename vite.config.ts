// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 👇 debe ser EXACTAMENTE el nombre de tu repo con slashes
  base: '/Malla-Ingenieria-Civil-El-ctrica/',
})
