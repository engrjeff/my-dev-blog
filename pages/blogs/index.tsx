import { allPosts, type Post } from '@contentlayer/generated';
import type { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import BlogCard from '@components/BlogCard';

type BlogsPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const BlogsPage: NextPage<BlogsPageProps> = ({ posts }) => {
  return (
    <>
      <NextSeo
        title='Blogs - Jeff Segovia'
        openGraph={{
          images: [{ url: '/blog-banner.png', alt: 'Jeff Segovia Blog', width: 1200, height: 630 }],
        }}
      />
      <div className='space-y-2 mb-6'>
        <h2 className='text-4xl font-bold text-gray-900 dark:text-white'>Blogs</h2>
        <p className='text-gray-600 dark:text-gray-400'>
          Being able to share what I know through these posts is truly a delight for me. May you
          pick up a thing or two from these. 😊
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10'>
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
      <div className='my-10'>
        <button className='bg-primary hover:bg-primary/95 text-white font-medium py-4 px-8 rounded-full shadow-md'>
          Load More Posts
        </button>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<{ posts: Omit<Post, 'body'>[] }> = () => {
  return {
    props: {
      posts: allPosts.map<Omit<Post, 'body'>>((post) => ({
        _id: post._id,
        _raw: post._raw,
        author: post.author,
        bannerUrl: post.bannerUrl,
        publishedAt: post.publishedAt,
        slug: post.slug,
        tags: post.tags,
        timeToRead: post.timeToRead,
        title: post.title,
        url: post.url,
        type: post.type,
      })),
    },
  };
};

export default BlogsPage;
