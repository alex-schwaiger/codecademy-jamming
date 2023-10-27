import { useCallback } from 'react';
import { Button } from './Button';

const Track = ({
  id,
  name,
  artist,
  album,
  isSelectedToPlaylist,
  addTrack,
  removeTrack,
  uri,
}) => {
  const onAddTrack = useCallback(() => {
    addTrack({ id, name, artist, album, isSelectedToPlaylist, uri });
  }, [addTrack, id, name, artist, isSelectedToPlaylist, album, uri]);

  const onRemoveTrack = useCallback(() => {
    removeTrack({ id, name, artist, album, isSelectedToPlaylist, uri });
  }, [removeTrack, id, name, artist, isSelectedToPlaylist, album, uri]);

  return (
    <div className='flex justify-between py-6'>
      <div>
        <h3 className='text-xl font-medium'>{name}</h3>
        <h4 className='text-sm text-slate-800'>
          {artist} | {album}
        </h4>
      </div>
      {isSelectedToPlaylist ? (
        <Button
          variant='round'
          size='icon'
          content={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={5}
              stroke='currentColor'
              className='h-6 w-2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 12h-15'
              />
            </svg>
          }
          onClick={onRemoveTrack}
        />
      ) : (
        <Button
          variant='round'
          size='icon'
          content={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2.5}
              stroke='currentColor'
              className='h-4 w-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
          }
          onClick={onAddTrack}
        />
      )}
    </div>
  );
};

export default Track;
