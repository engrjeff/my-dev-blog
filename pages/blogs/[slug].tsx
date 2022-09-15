import { allPosts, type Post } from '@contentlayer/generated';
import Link from 'next/link';
import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import BannerImage from '@components/BannerImage';

const BlogScreen: NextPage<{ post: Post }> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div>
      <Link href='/blogs'>
        <a
          aria-label='back to blogs list'
          className='border border-gray-600 inline-block p-3 rounded-full group mb-4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 group-hover:-translate-x-1 transition-transform'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
            />
          </svg>
        </a>
      </Link>
      <article className='prose lg:prose-lg mx-auto prose-a:no-underline hover:prose-a:text-primary prose-code:text-primary prose-blockquote:font-normal dark:prose-invert'>
        <h1 className='font-medium inline mb-0'>{post.title}</h1>
        <div className='text-xs uppercase text-gray-400 flex items-center gap-4 mb-6 md:mb-10'>
          <time>{post.publishedAt}</time>&mdash;
          <p>{post.timeToRead}</p>
        </div>
        <div className='text-justify '>
          <MDXContent components={{ BannerImage }} />
        </div>
      </article>
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
