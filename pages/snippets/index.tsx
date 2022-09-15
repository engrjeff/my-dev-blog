import type { NextPage } from 'next';

const SnippetsPage: NextPage = () => {
  return (
    <>
      <div className='space-y-2 mb-6 h-screen'>
        <h2 className='text-4xl font-bold'>Snippets</h2>
        <p className='dark:text-gray-400'>
          This is a collection of code snippets that I have used or found essential in my coding
          journey. <br /> Hope this list can be useful to you as well. 📙
        </p>
      </div>
    </>
  );
};

export default SnippetsPage;
