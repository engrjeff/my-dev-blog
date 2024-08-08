import type { Metadata } from 'next';

import SnippetCard from '@components/SnippetCard';
import getSnippets from '@lib/getSnippets';

export const metadata: Metadata = {
  title: 'Snippets - Jeff Segovia',
  description:
    'A collection of code snippets that I have used or found essential in my coding journey.',
};

function SnippetsPage() {
  const snippets = getSnippets();

  return (
    <>
      <section className="space-y-4 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Snippets
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          This is a collection of code snippets that I have used or found
          essential in my coding journey. <br /> Hope this list can be useful to
          you as well. 📙
        </p>
      </section>
      <section className="my-10 min-h-[80vh]">
        <div className="grid md:grid-cols-2 gap-8">
          {snippets.map((snippet) => (
            <SnippetCard key={snippet._id} snippet={snippet} />
          ))}
        </div>
      </section>
    </>
  );
}

export default SnippetsPage;
