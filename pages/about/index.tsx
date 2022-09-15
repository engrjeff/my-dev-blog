import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo title='About | Jeff Segovia' />
      <div className='space-y-2 mb-6 h-screen'>
        <h2 className='text-4xl font-bold'>About Me</h2>
        <p className='dark:text-gray-400'>About...</p>
      </div>
    </>
  );
};

export default AboutPage;
