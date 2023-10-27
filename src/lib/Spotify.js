const redirectUri = 'http://localhost:5173/';
const clientId = 'f3192c7d93ba4a579633eb1ffeefd048';
let accessToken = '';

export const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

    if (urlAccessToken && urlExpiresIn) {
      accessToken = urlAccessToken[1];
      const expires_in = +urlExpiresIn[1];
      window.setTimeout(() => (accessToken = ''), expires_in * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;

      console.log('redirect');
    }
  },

  async search(searchTerm) {
    const accessToken = Spotify.getAccessToken();
    return fetch(
      `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse) {
          return [];
        }
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          album: track.album.name,
          artist: track.artists[0].name,
          uri: track.uri,
        }));
      });
  },

  savePlaylist(playlistName, trackUris) {
    if (!playlistName || !trackUris) return;
    let accessToken = Spotify.getAccessToken();
    const header = { Authorization: `Bearer ${accessToken}` };
    let userId = '';

    return fetch('https://api.spotify.com/v1/me', { headers: header })
      .then((response) => response.json())
      .then((jsonResponse) => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: header,
          method: 'POST',
          body: JSON.stringify({ name: playlistName }),
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            const playlistId = jsonResponse.id;
            return fetch(
              `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
              {
                headers: header,
                method: 'POST',
                body: JSON.stringify({ uris: trackUris }),
              },
            );
          });
      });
  },
};
