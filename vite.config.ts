import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠ Usa EXACTAMENTE el nombre de tu repo entre slashes:
export default defineConfig({
  plugins: [react()],
  base: '/Malla-Ingenieria-Civil-El-ctrica/',
})