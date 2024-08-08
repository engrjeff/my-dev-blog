'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

interface FilterTagsProps {
  tags: string[];
}

const FilterTags = ({ tags }: FilterTagsProps) => {
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const activeTags = searchParams.getAll('tag') ?? [];

  const handleTagClick = (tag: string) => {
    startTransition(() => {
      const params = new URLSearchParams(window.location.search);
      if (!activeTags.includes(tag)) {
        params.append('tag', tag);
      } else {
        // @ts-ignore
        params.delete('tag', tag);
      }
      router.replace(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="mb-10">
      <p className="text-gray-100 text-lg mb-4">Filter posts by topics</p>
      <div className="flex flex-wrap gap-2 md:gap-4">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`bg-transparent text-gray-800 text-xs md:text-base rounded-full py-2 px-4 duration-200 transition-colors ${
              activeTags.includes(tag)
                ? 'dark:text-gray-900 dark:bg-white'
                : 'dark:text-gray-200 dark:bg-gray-800 hover:dark:bg-gray-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTags;
