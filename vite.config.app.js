import { fileURLToPath, URL } from 'node:url'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	root: fileURLToPath(new URL('./src/app', import.meta.url)),
	envDir: fileURLToPath(new URL('./', import.meta.url)),
	build: {
		emptyOutDir: true,
		outDir: fileURLToPath(new URL('./dist', import.meta.url)),
		rollupOptions: {
			input: {
				main: fileURLToPath(new URL('./src/app/chat/index.html', import.meta.url)),
				dashboard: fileURLToPath(new URL('./src/app/dashboard/index.html', import.meta.url)),
			},
		},
	},
	resolve: {
		alias: {
			'~': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	server: {
		port: 3030,
		strictPort: true
	},
	preview: {
		host: 'localhost',
		port: 3030,
		strictPort: true
	}
})
