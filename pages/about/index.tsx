import { type About, allAbouts } from '@contentlayer/generated';
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';

import LinkInPage from '@components/LinkInPage';
import RelativeLink from '@components/RelativeLink';
import Article from '@components/Article';
import Alert from '@components/Alert';

type AboutPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const AboutPage: NextPage<AboutPageProps> = ({ about }) => {
  const MDXContent = useMDXComponent(about.body.code);

  return (
    <>
      <NextSeo title='About | Jeff Segovia' description={about.description} />
      <Article>
        <div className='space-y-2 mb-6'>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>About Me</h1>
        </div>
        <div className='text-justify'>
          <MDXContent components={{ LinkInPage, RelativeLink, Alert }} />
        </div>
      </Article>
    </>
  );
};

export const getStaticProps: GetStaticProps<{ about: About }> = () => {
  const about = allAbouts[0];

  return {
    props: {
      about,
    },
  };
};

export default AboutPage;
