import { readItem } from '@directus/sdk';
import { directus } from '$services/directus';

export async function load({ params }) {
	const res = await directus.request(
		readItem('runners', params.slug, {
			fields: ['*']
		})
	);

	return { res };
}
