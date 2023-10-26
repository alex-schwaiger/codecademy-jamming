import { usePlaylistContext } from '../hooks/usePlaylist';
import { Button } from './Button';
import Tracklist from './Tracklist';

const Playlist = () => {
  const { playlistName, playListTracks, handleChange } = usePlaylistContext();

  return (
    <div className='rounded-2xl p-6 shadow'>
      <div className='flex gap-6'>
        <input
          className=' border-b-2 border-slate-100 px-4 py-2 text-sm placeholder:font-sans placeholder:font-light placeholder:italic focus:outline-none'
          type='text'
          value={playlistName}
          onChange={handleChange}
        />
        <Button content='Save To Spotify' type='Submit' />
      </div>
      <Tracklist tracks={playListTracks} />
    </div>
  );
};

export default Playlist;
