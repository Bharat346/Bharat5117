import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/Bharat5117/",
  plugins: [
    react(),
    nodePolyfills()
  ],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      process: 'process/browser',
    },
  },
})
