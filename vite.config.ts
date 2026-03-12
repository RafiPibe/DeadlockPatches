import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy wiki image requests to bypass CORS
      '/wiki-img': {
        target: 'https://deadlock.wiki',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wiki-img/, ''),
        headers: {
          'Referer': 'https://deadlock.wiki/',
        },
      },
    },
  },
})
