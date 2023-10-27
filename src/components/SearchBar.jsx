const SearchBar = ({ handleChange, value, handleKeyDown }) => {
  return (
    <div className='flex items-center gap-3 rounded-3xl bg-slate-100 px-4 py-2'>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-5 w-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </div>
      <input
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type='text'
        className='bg-slate-100 text-sm placeholder:font-sans placeholder:text-sm placeholder:font-light placeholder:italic focus:outline-none'
        placeholder='Search...'
      />
    </div>
  );
};

export default SearchBar;
