import { fileURLToPath, URL } from 'node:url'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(),
		cssInjectedByJsPlugin(),
	],
	build: {
		lib: {
			entry: fileURLToPath(new URL('./src/main.js', import.meta.url)),
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
		'process.env': {}
	  },

	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})
