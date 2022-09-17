import { type Post } from '@contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ post }: { post: Omit<Post, 'body'> }) => {
  return (
    <div className='cols-span-1 rounded-lg group'>
      <Link href={post.url}>
        <a className='relative aspect-video w-full block rounded-lg overflow-hidden'>
          <Image
            src={post.bannerUrl}
            blurDataURL={post.bannerUrl}
            placeholder='blur'
            alt='banner'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </a>
      </Link>
      <div className='py-5 flex flex-col gap-2'>
        <div className='flex items-center gap-2 mb-2'>
          {post.tags.map((tag, idx) => (
            <div
              key={idx}
              className='text-xs text-center font-medium rounded-full min-w-[64px] border border-gray-200 bg-gray-100 text-gray-800 dark:text-gray-200 dark:border-gray-600 py-1 px-3 dark:bg-gray-900'
            >
              <span>{tag}</span>
            </div>
          ))}
        </div>
        <time className='text-xs uppercase text-gray-400'>{post.publishedAt}</time>
        <Link href={post.url}>
          <a className='text-lg font-bold group-hover:text-primary transition-colors text-gray-900 dark:text-gray-100'>
            {post.title}
          </a>
        </Link>
        <p className='hidden text-sm text-gray-900 dark:text-gray-100'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam a maxime hic inventore.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
