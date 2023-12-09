import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components',
			$services: 'src/services',
			$icons: 'src/lib/assets/icons'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
