import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App)

app.use(Vue3Toastify, {
  autoClose: 3000,
  theme: "dark",
  position: "top-right",
});

app.mount('#app')

// Initialize AOS globally
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 50,
});
