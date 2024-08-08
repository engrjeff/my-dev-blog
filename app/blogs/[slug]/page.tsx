import { allPosts } from '@contentlayer/generated';
import type { Metadata } from 'next';

import Article from '@components/Article';
import ArticleContent from '@components/ArticleContent';
import BackButton from '@components/BackButton';
import ScrollToTopButton from '@components/ScrollToTopButton';
import { notFound } from 'next/navigation';

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      images: [
        {
          url: post.bannerUrl,
          alt: post.title,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};

export const generateStaticParams = () => {
  return allPosts.map((post) => ({ slug: post.slug }));
};

function BlogScreen({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative">
      <BackButton backTo="/blogs" label="back to blogs list" />
      <Article>
        <h1 className="font-medium inline mb-0">{post.title}</h1>
        <div className="text-xs uppercase text-gray-400 flex items-center gap-4 mb-6 md:mb-10">
          <time>{post.publishedAt}</time>&mdash;
          <p>{post.timeToRead}</p>
        </div>
        <div className="lg:text-justify">
          <ArticleContent post={post} />
        </div>
      </Article>
      <ScrollToTopButton />
    </div>
  );
}

export default BlogScreen;
