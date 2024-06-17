import { readItem } from '@directus/sdk';
import { directus } from '$services/directus';

export async function load({ params }) {
    let res;

    try {
        res = await directus.request(
            readItem('runners', params.slug, {
                fields: ['*']
            })
        );
    } catch (error) {
        console.error(error);
    }
	/*
	// Connect to Strava API
	const stravaId = '118255';
	const stravaSecret = '8e61b0631b9b749e7189f92fd085df5f6ad917bd';
	const stravaRefreshToken = '55c58da2bb0801b5a0ea025b37c6d088794268c8';
	const stravaAccessToken = 'e7325ac88b18dd7335138d882591122a1cf983fa';

  // Refresh token
   const refreshToken = await strava.oauth.refreshToken(stravaRefreshToken, (err, payload, limits) => {
     console.log(payload);
  });

	strava.config({
		access_token: stravaAccessToken,
		client_id: stravaId,
		client_secret: stravaSecret,
		redirect_uri: 'http://localhost:3000'
	});

	// Get athlete stats
	const athleteStats = await strava.athletes.stats({ id: 31814621 });

	// Get athlete zones
	//const athleteZones = await strava.athletes.listZones({id: 1805494});

	// Get athlete routes
	//const athleteRoutes = await strava.athletes.listRoutes({id: 1805494});

	// Get athlete totals and stats
	//const athleteTotals = await strava.athletes.getStats({id: 1805494});
  */
	return { res };
}
