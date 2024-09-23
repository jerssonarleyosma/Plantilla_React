import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Escuchar en todas las interfaces
    port: 3003, // El puerto que deseas usar
  },
  resolve: {
    alias: {
      '@atoms': '/src/components/atoms',
      '@molecules': '/src/components/molecules',
      '@organisms': '/src/components/organisms',
      '@templates': '/src/components/templates',
      '@tutoriales': '/src/components/Tutoriales',
      '@variables': '/src/_variables.scss',
      '@reset': '/src/_reset.scss',
    }
  },
})
