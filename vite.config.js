// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  //base: '/cartocatalog/apps/islamicos/', // Keynote Islámicos. Para servir desde un directorio que no es base path
  base: '/develmap/apps/wellness/', // Keynote Demo Wellness. Para servir desde un directorio que no es base path
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})