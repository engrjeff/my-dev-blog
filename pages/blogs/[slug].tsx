import { allPosts, type Post } from '@contentlayer/generated';
import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';

import BannerImage from '@components/BannerImage';
import LinkInPage from '@components/LinkInPage';
import ScrollToTopButton from '@components/ScrollToTopButton';
import BackButton from '@components/BackButton';
import Article from '@components/Article';

const BlogScreen: NextPage<{ post: Post }> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className='relative'>
      <NextSeo
        title={post.title}
        openGraph={{
          images: [
            {
              url: post.bannerUrl,
              alt: post.title,
              width: 1200,
              height: 630,
            },
          ],
        }}
      />
      <BackButton backTo='/blogs' label='back to blogs list' />
      <Article>
        <h1 className='font-medium inline mb-0'>{post.title}</h1>
        <div className='text-xs uppercase text-gray-400 flex items-center gap-4 mb-6 md:mb-10'>
          <time>{post.publishedAt}</time>&mdash;
          <p>{post.timeToRead}</p>
        </div>
        <div className='text-justify'>
          <MDXContent components={{ BannerImage, LinkInPage }} />
        </div>
      </Article>
      <ScrollToTopButton />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = (context) => {
  const { slug } = context.params as { slug: string };

  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
  };
};

export default BlogScreen;
