import { createContext, useState, useCallback } from 'react';

export const PlaylistContext = createContext(undefined);

export const PlaylistContextComponent = ({ children }) => {
  const [playlistName, setPlaylistName] = useState('New Playlist');

  const [searchResult, setSearchResults] = useState([
    {
      name: 'HAPPY',
      artist: 'NF',
      album: 'HOPE',
      id: 'HAPPY',
      isSelectedToPlaylist: false,
    },
    {
      id: 'MOTTO',
      name: 'MOTTO',
      artist: 'NF',
      album: 'HOPE',
      isSelectedToPlaylist: false,
    },
    {
      id: 'aksdjfl',
      name: 'sdfads',
      artist: 'NF',
      album: 'HOPE',
      isSelectedToPlaylist: false,
    },
    {
      id: 'MOowiuerTTO',
      name: 'aslkdjflsdjOTTO',
      artist: 'NF',
      album: 'HOPE',
      isSelectedToPlaylist: false,
    },
  ]);

  const [playListTracks, setPlaylistTracks] = useState([
    {
      id: 'MOTTO',
      name: 'MOTTO',
      artist: 'NF',
      album: 'HOPE',
      isSelectedToPlaylist: true,
    },
  ]);

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
        }}
      >
        {children}
      </PlaylistContext.Provider>
    </>
  );
};
