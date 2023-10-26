import { usePlaylistContext } from '../hooks/usePlaylist';
import Tracklist from './Tracklist';

const SearchResults = () => {
  const { searchResult } = usePlaylistContext();
  return (
    <div>
      <Tracklist tracks={searchResult} />
    </div>
  );
};

export default SearchResults;
