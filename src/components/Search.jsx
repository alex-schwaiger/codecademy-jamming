import { useState } from 'react';
import SearchBar from './SearchBar';

const Search = ({ btnContent, btnType }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  console.log(text);

  return (
    <form className=' flex flex-row  gap-4'>
      <SearchBar value={text} handleChange={handleChange} />
    </form>
  );
};

export default Search;
