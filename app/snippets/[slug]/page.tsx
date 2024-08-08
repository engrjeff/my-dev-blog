import { allSnippets } from '@contentlayer/generated';
import type { Metadata } from 'next';

import Article from '@components/Article';
import BackButton from '@components/BackButton';
import ScrollToTopButton from '@components/ScrollToTopButton';
import SnippetContent from '@components/SnippetContent';
import { notFound } from 'next/navigation';

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const snippet = allSnippets.find((snippet) => snippet.slug === params.slug);

  if (!snippet) {
    notFound();
  }

  return {
    title: snippet.title,
    description: snippet.description,
  };
};

export const generateStaticParams = () => {
  return allSnippets.map((snippet) => ({ slug: snippet.slug }));
};

function SnippetScreen({ params }: { params: { slug: string } }) {
  const snippet = allSnippets.find(
    (snippetItem) => snippetItem.slug === params.slug
  );

  if (!snippet) {
    notFound();
  }

  return (
    <div className="relative">
      <BackButton backTo="/snippets" label="back to snippets list" />
      <Article>
        <h1 className="font-medium inline mb-0">{snippet.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">
          {snippet.description}
        </p>
        <div className="text-justify">
          <SnippetContent snippet={snippet} />
        </div>
      </Article>
      <ScrollToTopButton />
    </div>
  );
}

export default SnippetScreen;
