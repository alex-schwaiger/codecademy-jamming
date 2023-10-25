import Tracklist from './Tracklist';

const SearchResults = ({ results, addTrack }) => {
  return (
    <div>
      <Tracklist tracks={results} addTrack={addTrack} />
    </div>
  );
};

export default SearchResults;
