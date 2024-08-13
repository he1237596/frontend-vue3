import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import piniaStore from './stores'
const app = createApp(App)

app.use(piniaStore)
app.use(router)

app.mount('#app')
