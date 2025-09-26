import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Final config: works with ngrok & normal localhost
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow any ngrok sub-domain so you don’t have to edit this every time
    allowedHosts: ['.ngrok-free.dev'],
    host: true,           // ensures Vite listens on all network interfaces
    port: 5173            // you can change the port if needed
  }
})
