export async function fetchData(playlistId: string, pageToken?: string) {
  try {
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_TOKEN;
    const maxResults = 3;
    const requestUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${API_KEY}${
      pageToken ? `&pageToken=${pageToken}` : ''
    }`;

    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Unable to fetch data.`);
  }
}
