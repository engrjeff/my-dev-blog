import Link from 'next/link';
import type { SnippetWithoutBody } from '@lib/getSnippets';

const SnippetCard = ({ snippet }: { snippet: SnippetWithoutBody }) => {
  return (
    <Link href={snippet.url}>
      <a className='px-6 py-4 rounded-md inline-block border border-gray-200 bg-gray-100 text-gray-800 dark:text-gray-200 dark:bg-gray-900 dark:border-gray-600 ring-2 ring-transparent ring-offset-4 ring-offset-darkest hover:ring-primary'>
        <h2 className='font-bold text-xl md:text-2xl mb-4'>{snippet.title}</h2>
        <p className='text-gray-400'>{snippet.description}</p>
      </a>
    </Link>
  );
};

export default SnippetCard;
