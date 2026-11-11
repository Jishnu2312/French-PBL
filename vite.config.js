import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cesium from 'vite-plugin-cesium'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/French-PBL/',
  plugins: [react(), cesium()],
  server: {
    port: 5173,
    open: false
  }
});
