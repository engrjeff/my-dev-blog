import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo title='About | Jeff Segovia' />
      <div className='space-y-2 mb-6 h-screen'>
        <h2 className='text-4xl font-bold text-gray-900 dark:text-white'>About Me</h2>
        <p className='text-gray-600 dark:text-gray-400'>About ...</p>
      </div>
    </>
  );
};

export default AboutPage;
