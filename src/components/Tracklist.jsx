import Track from './Track';

const Tracklist = ({ tracks, addTrack, removeTrack }) => {
  return (
    <div className='flex flex-col divide-y-2'>
      {tracks.map((track) => (
        <Track
          key={track.id}
          id={track.id}
          name={track.name}
          artist={track.artist}
          album={track.album}
          isSelectedToPlaylist={track.isSelectedToPlaylist}
          addTrack={addTrack}
          removeTrack={removeTrack}
        />
      ))}
    </div>
  );
};

export default Tracklist;
