import type { NextApiRequest, NextApiResponse } from 'next';

const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

async function getAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { access_token } = await getAccessToken();

  const topArtists = await fetch('https://api.spotify.com/v1/me/top/artists?limit=5', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (topArtists.status > 400) {
    return res.status(topArtists.status).json({ error: 'Failed to fetch top tracks' });
  }

  const data = await topArtists.json();
  res.status(200).json(data);
} 