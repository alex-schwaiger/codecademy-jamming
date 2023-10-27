import { createContext, useState, useCallback } from 'react';
import { Spotify } from '../lib/Spotify';

export const PlaylistContext = createContext(undefined);

export const PlaylistContextComponent = ({ children }) => {
  const [playlistName, setPlaylistName] = useState('New Playlist');

  const [searchResult, setSearchResults] = useState([]);

  const [playListTracks, setPlaylistTracks] = useState([]);

  const removeTrack = useCallback((track) => {
    track.isSelectedToPlaylist = false;
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id),
    );
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (!track.id) {
        console.error('Track does not have an id property');
        return;
      }
      if (playListTracks.some((tracks) => tracks.id === track.id)) return;
      track.isSelectedToPlaylist = true;
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playListTracks],
  );

  const handleChange = useCallback((e) => {
    setPlaylistName(e.target.value);
  }, []);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playListTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  }, [playlistName, playListTracks]);

  return (
    <>
      <PlaylistContext.Provider
        value={{
          playlistName,
          setPlaylistName,
          searchResult,
          setSearchResults,
          playListTracks,
          setPlaylistTracks,
          removeTrack,
          addTrack,
          handleChange,
          search,
          savePlaylist,
        }}
      >
        {children}
      </PlaylistContext.Provider>
    </>
  );
};
