import { Button } from './Button';
import Tracklist from './Tracklist';

const Playlist = ({
  playlistTracks,
  removeTrack,
  defaultPlaylistName,
  setPlaylistName,
}) => {
  const handleChange = (e) => {
    setPlaylistName(e.target.value);
  };

  return (
    <div className='rounded-2xl p-6 shadow'>
      <div className='flex gap-6'>
        <input
          className=' border-b-2 border-slate-100 px-4 py-2 text-sm placeholder:font-sans placeholder:font-light placeholder:italic focus:outline-none'
          type='text'
          value={defaultPlaylistName}
          onChange={handleChange}
        />
        <Button content='Save To Spotify' type='Submit' />
      </div>
      <Tracklist tracks={playlistTracks} removeTrack={removeTrack} />
    </div>
  );
};

export default Playlist;
