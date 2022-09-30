import { allSnippets, type Snippet } from '@contentlayer/generated';
import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';

import LinkInPage from '@components/LinkInPage';
import RelativeLink from '@components/RelativeLink';
import ScrollToTopButton from '@components/ScrollToTopButton';
import BackButton from '@components/BackButton';
import Article from '@components/Article';
import Alert from '@components/Alert';

const SnippetScreen: NextPage<{ snippet: Snippet }> = ({ snippet }) => {
  const MDXContent = useMDXComponent(snippet.body.code);

  return (
    <div className='relative'>
      <NextSeo title={snippet.title} />
      <BackButton backTo='/snippets' label='back to snippets list' />
      <Article>
        <h1 className='font-medium inline mb-0'>{snippet.title}</h1>
        <p className='text-gray-600 dark:text-gray-400'>{snippet.description}</p>
        <div className='text-justify'>
          <MDXContent components={{ LinkInPage, RelativeLink, Alert }} />
        </div>
      </Article>
      <ScrollToTopButton />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allSnippets.map((snippet) => ({
      params: {
        slug: snippet.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ snippet: Snippet }> = (context) => {
  const { slug } = context.params as { slug: string };

  const snippet = allSnippets.find((snippetItem) => snippetItem.slug === slug);

  if (!snippet) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      snippet,
    },
  };
};

export default SnippetScreen;
