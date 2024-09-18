import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import generouted from '@generouted/tanstack-react-router'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [react(), generouted()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.js'
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@test-utils', replacement: fileURLToPath(new URL('./test-utils', import.meta.url)) }
    ]
  }
})
