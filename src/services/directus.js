import { createDirectus, staticToken, rest } from '@directus/sdk';

if (!import.meta.env.VITE_DIRECTUS_URL || !import.meta.env.VITE_DIRECTUS_TOKEN) {
	throw new Error('Missing environment variables VITE_DIRECTUS_URL or VITE_DIRECTUS_TOKEN');
  }

const directus = createDirectus(import.meta.env.VITE_DIRECTUS_URL)
	.with(staticToken(import.meta.env.VITE_DIRECTUS_TOKEN))
	.with(rest());

export { directus };