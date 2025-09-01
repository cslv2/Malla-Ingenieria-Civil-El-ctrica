import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Malla-Ingenieria-Civil-El-ctrica/', // <- igualito al nombre del repo
});
