import { type Post } from '@contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import dynamic from 'next/dynamic';

import Alert from '@components/Alert';
import BannerImage from '@components/BannerImage';
import {
  InputWithFloatingLabel,
  InputWithFloatingLabelA,
  InputWithFloatingLabelB,
  InputWithFloatingLabelC,
} from '@components/InputWithFloatingLabel';
import LinkInPage from '@components/LinkInPage';
import LinkToPart from '@components/LinkToPart';
import RelativeLink from '@components/RelativeLink';

// Example-specific contents
const AudioPlayerExample = dynamic(() => import('@components/AudioPlayer'), {
  ssr: false,
});

const CarouselExample = dynamic(() => import('@components/Carousel'), {
  ssr: false,
});

const TypographyExample = dynamic(() => import('@components/Typography'), {
  ssr: false,
});

function ArticleContent({ post }: { post: Post }) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <MDXContent
      components={{
        BannerImage,
        LinkInPage,
        RelativeLink,
        Alert,
        LinkToPart,
        AudioPlayerExample,
        CarouselExample,
        TypographyExample,
        InputWithFloatingLabel,
        InputWithFloatingLabelA,
        InputWithFloatingLabelB,
        InputWithFloatingLabelC,
      }}
    />
  );
}

export default ArticleContent;
