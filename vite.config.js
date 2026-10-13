import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-vue': ['vue'],
          'vendor-swiper': ['swiper', 'swiper/vue'],
          'vendor-emailjs': ['@emailjs/browser'],
          'vendor-ui': ['vue3-toastify', 'aos'],
        }
      }
    }
  }
})
