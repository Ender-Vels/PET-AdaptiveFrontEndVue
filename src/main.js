import { createApp } from 'vue'
import App from './App.vue'
import router from './route/router.js'

let app =createApp(App)
app.use(router)


app.mount('#app')
