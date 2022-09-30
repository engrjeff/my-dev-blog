import { useState } from 'react';
import type { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import getSortedPosts, { PostWithoutBody } from '@lib/getSortedPosts';
import { bannerUrls } from '@lib/constants';
import { getUniqueTagsFromPosts } from '@lib/helpers';
import BlogCard from '@components/BlogCard';
import Search from '@components/Search';
import FilterTags from '@components/FilterTags';

type BlogsPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const BlogsPage: NextPage<BlogsPageProps> = ({ posts, tags }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<string[]>([]);

  let filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  filteredPosts =
    filters.length === 0
      ? filteredPosts
      : filteredPosts.filter((p) => p.tags.some((t) => filters.includes(t)));

  const handleTagFilterChange = (tag: string) => {
    if (searchQuery) setSearchQuery('');

    setFilters((old) => (old.includes(tag) ? old.filter((i) => i !== tag) : [...old, tag]));
  };

  const handleSearch = (q: string) => {
    setFilters([]);
    setSearchQuery(q);
  };

  return (
    <>
      <NextSeo
        title='Blogs - Jeff Segovia'
        description='Comprehensive blog posts about web development by Jeff Segovia'
        openGraph={{
          images: [{ url: bannerUrls.blog, alt: 'Jeff Segovia Blog', width: 1200, height: 630 }],
        }}
      />
      <div className='space-y-2 mb-6'>
        <h2 className='text-4xl font-bold text-gray-900 dark:text-white'>Blogs</h2>
        <p className='text-gray-600 dark:text-gray-400'>
          Being able to share what I know through these posts is truly a delight for me. May you
          pick up a thing or two from these. 😊
        </p>
      </div>
      <Search query={searchQuery} onSearch={handleSearch} />
      <FilterTags tags={tags} onChange={handleTagFilterChange} activeTags={filters} />
      {filteredPosts.length === 0 && (
        <div>
          <p>No posts found. Try another keyword.</p>
        </div>
      )}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10'>
        {filteredPosts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
      {posts.length > 6 && (
        <div className='my-10'>
          <button className='bg-primary hover:bg-primary/95 text-white font-medium py-4 px-8 rounded-full shadow-md'>
            Load More Posts
          </button>
        </div>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps<{ posts: PostWithoutBody[]; tags: string[] }> = () => {
  const posts = getSortedPosts();
  const tags = getUniqueTagsFromPosts(posts);

  return {
    props: {
      posts,
      tags,
    },
  };
};

export default BlogsPage;
