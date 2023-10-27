import { usePlaylistContext } from '../hooks/usePlaylist';
import Track from './Track';

const Tracklist = ({ tracks }) => {
  const { removeTrack, addTrack } = usePlaylistContext();

  return (
    <div className='flex flex-col divide-y-2'>
      {tracks.map((track) => (
        <Track
          key={track.id}
          id={track.uri}
          name={track.name}
          artist={track.artist}
          album={track.album}
          isSelectedToPlaylist={track.isSelectedToPlaylist}
          uri={track.uri}
          addTrack={addTrack}
          removeTrack={removeTrack}
        />
      ))}
    </div>
  );
};

export default Tracklist;
