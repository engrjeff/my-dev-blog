import { AppMetadata } from '@components/AppMetadata';
import { AppScripts } from '@components/AppScripts';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { bannerUrls } from '@lib/constants';
import type { Metadata } from 'next';
import './globals.css';

import { Providers } from '@components/Providers';
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
  title: 'Jeff Segovia',
  description:
    'I am Jeff, a software engineer from the Philippines and this is my official website and dev blog where I write articles and tutorials about web development. My content is mostly focused on ReactJs.',
  openGraph: {
    images: [
      {
        url: bannerUrls.home,
        alt: 'Jeff Segovia Dev',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    site: 'https://jeffsegovia.dev',
    card: 'summary_large_image',
    creator: '@engrjeffsegovia',
    title: 'Jeff Segovia',
    images: [bannerUrls.home],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <AppMetadata />
      <AppScripts />
      <body>
        <NextTopLoader color="#f59e0b" showSpinner={false} />
        <Providers>
          <div className="bg-white dark:bg-darkest">
            <Header />
            <main className="py-6 md:py-10 container max-w-6xl">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
