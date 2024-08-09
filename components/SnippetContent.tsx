'use client';

import { Snippet } from '@contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

import Alert from '@components/Alert';
import LinkInPage from '@components/LinkInPage';
import RelativeLink from '@components/RelativeLink';

function SnippetContent({ snippet }: { snippet: Snippet }) {
  const MDXContent = useMDXComponent(snippet.body.code);

  return <MDXContent components={{ LinkInPage, RelativeLink, Alert }} />;
}

export default SnippetContent;
