// vite.config.js (or vite.config.ts)

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // ADD OR MODIFY THE SERVER BLOCK
  server: {
    // This tells Vite to listen on all local network interfaces (0.0.0.0),
    // making it accessible via your local IP address.
    host: true, 
    // Or you can specify '0.0.0.0'
    // host: '0.0.0.0',
    port: 5173, // Optional: ensures it runs on the default port
  },
});