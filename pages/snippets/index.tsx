import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const SnippetsPage: NextPage = () => {
  return (
    <>
      <NextSeo title='Snippets | Jeff Segovia' />
      <div className='space-y-2 mb-6 h-screen'>
        <h2 className='text-4xl font-bold text-gray-900 dark:text-white'>Snippets</h2>
        <p className='text-gray-600 dark:text-gray-400'>
          This is a collection of code snippets that I have used or found essential in my coding
          journey. <br /> Hope this list can be useful to you as well. 📙
        </p>
      </div>
    </>
  );
};

export default SnippetsPage;
