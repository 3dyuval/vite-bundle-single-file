import { createApp } from 'vue'

import App from '~/App.vue'

const app = createApp(App)

const isProd = import.meta.env.PROD

if (isProd) {
	const element = document.createElement('div')
	element.id = 'app-iframe'
	document.body.appendChild(element)
}

app.mount('#app-iframe')
