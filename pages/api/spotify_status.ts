import axios from 'axios';
import querystring from 'querystring';
import type { NextApiRequest, NextApiResponse } from 'next';

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
	process.env;

const auth = Buffer.from(
	`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
).toString('base64');

const getAccessToken = async () => {
	const params = new URLSearchParams();
	params.set('grant_type', 'refresh_token');
	params.set('refresh_token', SPOTIFY_REFRESH_TOKEN as string);

	const response = await axios.post(
		'https://accounts.spotify.com/api/token',
		params,
		{
			headers: {
				Authorization: `Basic ${auth}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		}
	);

	return response.data.access_token;
};

const route = async (req: NextApiRequest, res: NextApiResponse) => {
	const data = await axios.get(
		'https://api.spotify.com/v1/me/player/currently-playing',
		{
			headers: {
				Authorization: `Bearer ${await getAccessToken()}`,
			},
		}
	);

	if (data.status == 204 || data.status > 400)
		return res.status(200).json({ playing: false });

	const song = data.data;

	res.status(200).json({
		playing: song.is_playing,
		title: song.item.name,
		artist: song.item.artists.map((a: any) => a.name).join(', '),
		url: song.item.external_urls.spotify,
	});
};

export default route;
