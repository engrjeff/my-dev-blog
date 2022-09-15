import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { NextSeo } from 'next-seo';

const routes = [
  { label: 'Home', path: '/' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Snippets', path: '/snippets' },
  { label: 'About', path: '/about' },
];

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useRouter();

  return (
    <div className='bg-white dark:bg-darkest'>
      <NextSeo
        title='Jeff Segovia'
        description='The dev blog and portfolio website of Engineer Jeff Segovia'
      />
      <header className='backdrop-blur-lg py-6 md:py-8 sticky top-0 bg-white dark:bg-darkest/70 border-b border-gray-200 dark:border-gray-700 z-10'>
        <nav className='container max-w-6xl flex items-center justify-between'>
          <Link href='/'>
            <a className='text-xl font-semibold text-gray-900 dark:text-white'>
              jeffsegovia<span className='text-primary'>.dev</span>
            </a>
          </Link>
          <div className='hidden md:flex items-center gap-3'>
            {routes.map((route) => (
              <Link key={route.label} href={route.path}>
                <a
                  className={`px-2 py-1 rounded-md ${
                    pathname === route.path ? 'text-primary' : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {route.label}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main className='py-6 md:py-10 container max-w-6xl'>{children}</main>
      <footer className='container max-w-6xl flex flex-col md:flex-row md:items-center py-8 gap-4 border-t border-gray-200 dark:border-gray-700'>
        <div className='space-x-4'>
          <a
            href='https://wwww.facebook.com/jhefecegrace'
            target='_blank'
            rel='noreferrer'
            className='text-sm text-[#222] dark:text-gray-500 font-medium cursor-pointer hover:text-primary dark:hover:text-primary'
          >
            Facebook
          </a>
          <a
            href='https://github.com/engrjeff'
            target='_blank'
            rel='noreferrer'
            className='text-sm text-[#222] dark:text-gray-500 font-medium cursor-pointer hover:text-primary dark:hover:text-primary'
          >
            Github
          </a>
          <a
            href='https://ecejhefgrace.medium.com'
            target='_blank'
            rel='noreferrer'
            className='text-sm text-[#222] dark:text-gray-500 font-medium cursor-pointer hover:text-primary dark:hover:text-primary'
          >
            Medium
          </a>
          <a
            href='https://www.abideinthevineph.org'
            target='_blank'
            rel='noreferrer'
            className='text-sm text-[#222] dark:text-gray-500 font-medium cursor-pointer hover:text-primary dark:hover:text-primary'
          >
            Abide
          </a>
        </div>
        <div className='ml-0 md:ml-auto'>
          <p className='text-sm text-[#222] dark:text-gray-500'>
            &copy; {new Date().getFullYear()} All rights reserved. Jeff Segovia.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
