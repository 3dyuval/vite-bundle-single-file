import { fileURLToPath, URL } from 'node:url'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), cssInjectedByJsPlugin()],
	root: fileURLToPath(new URL('./src/iframe', import.meta.url)),
	build: {
		emptyOutDir: false,
		outDir: fileURLToPath(new URL('./dist', import.meta.url)),
		lib: {
			entry: fileURLToPath(new URL('./src/iframe/main.js', import.meta.url)),
			name: 'InjectChat',
			fileName: 'inject',
		},
		rollupOptions: {
			output: [
				{
					format: 'esm',
					esModule: true,
					exports: 'named',
				},
			],
		},
	},
	define: {
		'process.env': {},
	},
	resolve: {
		alias: {
			'~': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	server: {
		port: 4040,
		strictPort: true,
	},
})
