/// <reference types="vite/client" />
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 usa EXACTAMENTE el nombre de tu repo
export default defineConfig({
  plugins: [react()],
  base: '/Malla-Ingenieria-Civil-El-ctrica/',
})

