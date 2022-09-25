interface SearchProps {
  query: string;
  onSearch: (keyword: string) => void;
}

const Search = ({ query, onSearch }: SearchProps) => {
  return (
    <div className='relative my-10'>
      <input
        value={query}
        onChange={(e) => onSearch(e.currentTarget.value)}
        onReset={(e) => onSearch('')}
        type='search'
        placeholder='Search'
        className='pl-12 pr-4 h-14 bg-transparent placeholder:text-gray-600 border border-gray-600 rounded-full outline-primary duration-150 transition-colors hover:border-gray-700 focus:border-transparent'
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6 text-gray-600 absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
        />
      </svg>
    </div>
  );
};

export default Search;
