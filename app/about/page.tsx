import { allAbouts } from '@contentlayer/generated';

import AboutContent from '@components/AboutContent';
import Article from '@components/Article';
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  const about = allAbouts[0];

  return {
    title: 'About - Jeff Segovia',
    description: about.description,
  };
};

function AboutPage() {
  const about = allAbouts[0];

  return (
    <>
      <Article>
        <div className="space-y-2 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h1>
        </div>
        <div className="text-justify">
          <AboutContent about={about} />
        </div>
      </Article>
    </>
  );
}

export default AboutPage;
