'use client';

import { About } from '@contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

import Alert from '@components/Alert';
import LinkInPage from '@components/LinkInPage';
import RelativeLink from '@components/RelativeLink';

function AboutContent({ about }: { about: About }) {
  const MDXContent = useMDXComponent(about.body.code);

  return <MDXContent components={{ LinkInPage, RelativeLink, Alert }} />;
}

export default AboutContent;
