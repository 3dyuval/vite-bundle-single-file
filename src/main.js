import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)

const cssSrc = document.createElement('script')

const element = document.createElement('div')
element.id = 'app-inject'
document.body.appendChild(element)

app.mount('#app-inject')

