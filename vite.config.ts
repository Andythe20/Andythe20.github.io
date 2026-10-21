import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Rutas relativas para que el sitio funcione tanto en la raíz del dominio
  // (andythe20.github.io) como en un subdirectorio de proyecto.
  base: './',
})
