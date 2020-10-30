import { createApp } from 'vue'
import app from './app'
import router from './router'
import store from './store'

import './permission'

import './mock/index'

createApp(app).use(store).use(router).mount('#app')
