import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio_1/', // <--- Ye line add ki
  plugins: [react()],
})
