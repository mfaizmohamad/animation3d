import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/animation3d",
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
})
