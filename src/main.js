import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import router from './router'
import App from './App.vue'
import './style.css'

createApp(App)
    .use(router)
    .use(MotionPlugin)
    .mount('#app')