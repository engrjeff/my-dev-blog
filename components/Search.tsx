'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

interface SearchProps {
  query: string;
}

const Search = ({ query }: SearchProps) => {
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (term: string) => {
    startTransition(() => {
      const params = new URLSearchParams(window.location.search);
      if (term) {
        params.set('search', term);
      } else {
        params.delete('search');
      }

      params.delete('tag');
      router.replace(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="relative my-10">
      <input
        defaultValue={query}
        onChange={(e) => handleChange(e.currentTarget.value)}
        onReset={() => handleChange('')}
        type="search"
        placeholder="Search"
        className="w-full md:w-1/2 appearance-none pl-12 pr-4 h-14 bg-transparent placeholder:text-gray-600 outline-none ring-2 ring-gray-600 rounded-full duration-150 transition-colors focus:ring-primary"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-gray-600 absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
};

export default Search;
