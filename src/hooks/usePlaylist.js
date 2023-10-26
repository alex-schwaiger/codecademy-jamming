import { useContext } from 'react';
import { PlaylistContext } from '../context/userContext';

export const usePlaylistContext = () => {
  const playlist = useContext(PlaylistContext);

  if (playlist === undefined) {
    throw new Error('usePlaylistContext must be used with a PlaylistContext');
  }

  return playlist;
};
