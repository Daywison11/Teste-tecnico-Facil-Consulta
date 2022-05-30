import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask'
import bootstrap from './services/Bootstrap'
import base from './assets/base.css'

const app = createApp(App)

app.use(router)
app.use(base)
app.use(bootstrap)
app.mount('#app')
app.use(VueTheMask)
