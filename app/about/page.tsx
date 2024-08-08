import { allAbouts } from '@contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';

import Alert from '@components/Alert';
import Article from '@components/Article';
import LinkInPage from '@components/LinkInPage';
import RelativeLink from '@components/RelativeLink';

function AboutPage() {
  const about = allAbouts[0];

  const MDXContent = useMDXComponent(about.body.code);

  return (
    <>
      <NextSeo title="About - Jeff Segovia" description={about.description} />
      <Article>
        <div className="space-y-2 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h1>
        </div>
        <div className="text-justify">
          <MDXContent components={{ LinkInPage, RelativeLink, Alert }} />
        </div>
      </Article>
    </>
  );
}

export default AboutPage;
