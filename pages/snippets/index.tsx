import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import getSnippets, { type SnippetWithoutBody } from '@lib/getSnippets';
import SnippetCard from '@components/SnippetCard';

type SnippetsPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const SnippetsPage: NextPage<SnippetsPageProps> = ({ snippets }) => {
  return (
    <>
      <NextSeo
        title='Snippets | Jeff Segovia'
        description='A collection of code snippets that I have used or found essential in my coding
          journey.'
      />
      <section className='space-y-2 mb-6'>
        <h2 className='text-4xl font-bold text-gray-900 dark:text-white'>Snippets</h2>
        <p className='text-gray-600 dark:text-gray-400'>
          This is a collection of code snippets that I have used or found essential in my coding
          journey. <br /> Hope this list can be useful to you as well. 📙
        </p>
      </section>
      <section className='my-10'>
        <div className='grid md:grid-cols-2 gap-8'>
          {snippets.map((snippet) => (
            <SnippetCard key={snippet._id} snippet={snippet} />
          ))}
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps<{ snippets: SnippetWithoutBody[] }> = () => {
  const snippets = getSnippets();

  return {
    props: {
      snippets,
    },
  };
};

export default SnippetsPage;
