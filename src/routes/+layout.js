import { readItems } from '@directus/sdk';
import { directus } from '$services/directus';

export async function load() {
	const res = await directus.request(
		readItems('runners', {
			fields: ['id', 'prenom', 'statut', 'monogramme']
		})
	);

	return { res };
}
