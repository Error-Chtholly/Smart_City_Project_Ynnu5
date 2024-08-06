import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  optimizeDeps: {
    include: ["@mapbox/mapbox-gl-directions", "mapbox-gl"],
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
