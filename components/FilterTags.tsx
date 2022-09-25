interface FilterTagsProps {
  tags: string[];
  onChange: (tag: string) => void;
  activeTags: string[];
}

const FilterTags = ({ tags, onChange, activeTags }: FilterTagsProps) => {
  return (
    <div className='mb-10'>
      <p className='text-gray-100 text-lg mb-4'>Filter posts by topics</p>
      <div className='flex flex-wrap gap-4'>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onChange(tag)}
            className={`bg-transparent text-gray-800 rounded-full py-2 px-4 duration-200 transition-colors ${
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
