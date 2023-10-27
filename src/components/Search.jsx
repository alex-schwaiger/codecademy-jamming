import { useState, useCallback } from 'react';
import SearchBar from './SearchBar';
import { usePlaylistContext } from '../hooks/usePlaylist';

const Search = () => {
  const [text, setText] = useState('');
  const { search } = usePlaylistContext();

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const onSearch = useCallback(() => {
    search(text);
  }, [search, text]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        onSearch();
      }
    },
    [onSearch],
  );

  return (
    <form className=' flex flex-row  gap-4'>
      <SearchBar
        value={text}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
    </form>
  );
};

export default Search;
