import type { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
import { bannerUrls } from '@lib/constants';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='bg-white dark:bg-darkest'>
      <NextSeo
        title='Jeff Segovia'
        description='The dev blog and portfolio website of Engineer Jeff Segovia'
        openGraph={{
          images: [{ url: bannerUrls.home, alt: 'Jeff Segovia Dev', width: 1200, height: 630 }],
        }}
        twitter={{
          handle: '@engrjeff',
          site: 'https://jeffsegovia.dev',
          cardType: 'summary_large_image',
        }}
      />
      <Header />
      <main className='py-6 md:py-10 container max-w-6xl'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
