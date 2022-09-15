import BlogCard from '@components/BlogCard';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jeff Dev Blog</title>
        <meta name='description' content='The dev blog of Jeff Segovia' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='flex flex-col gap-4'>
        <div className='flex items-center gap-8'>
          <div className='w-16 h-16 relative rounded-full overflow-hidden ring-4 ring-primary/0'>
            <Image src='/me.jpg' alt='Jeff Segovia' layout='fill' objectFit='cover' />
          </div>
          <div className='space-y-1'>
            <h1 className='text-5xl font-bold text-gray-900 dark:text-white'>Jeff Segovia</h1>
            <p className='text-gray-900 text-lg font-light dark:text-gray-400'>
              Software and Electronics Engineer
            </p>
          </div>
        </div>
        <p className='text-gray-800 py-3 text-lg dark:text-gray-100'>
          Contributing to the community by sharing what I know. Helping other developers and
          engineers become more passionate in what they do.
        </p>
        <div className='my-10'>
          <Link href='/blogs'>
            <a className='bg-primary hover:bg-primary/95 text-white py-4 px-8 rounded-full shadow-md'>
              Read the Blogs
            </a>
          </Link>
        </div>
      </section>

      {/* Featured Posts */}
      <section className='my-10'>
        <h2 className='text-4xl font-bold mb-6'>Recent Posts</h2>
        <div className='grid grid-cols-3 gap-6'>
          {/* {[1, 2, 3].map((post) => (
            <BlogCard key={post} />
          ))} */}
        </div>
        <div className='my-10'>
          <Link href='/blogs'>
            <a className='bg-primary hover:bg-primary/95 text-white py-4 px-8 rounded-full shadow-md'>
              Browse All Posts
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
