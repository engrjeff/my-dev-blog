import BlogCard from '@components/BlogCard';
import FilterTags from '@components/FilterTags';
import Search from '@components/Search';
import { bannerUrls } from '@lib/constants';
import getSortedPosts from '@lib/getSortedPosts';
import { getUniqueTagsFromPosts } from '@lib/helpers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs - Jeff Segovia',
  description: 'Comprehensive blog posts about web development by Jeff Segovia',
  openGraph: {
    images: [
      {
        url: bannerUrls.blog,
        alt: 'Jeff Segovia Blog',
        width: 1200,
        height: 630,
      },
    ],
  },
};

function BlogsPage({
  searchParams,
}: {
  searchParams: { search: string; tag: string[] | string };
}) {
  const posts = getSortedPosts();
  const tags = getUniqueTagsFromPosts(posts);

  let searchQuery = searchParams.search;

  let filteredPosts = searchQuery
    ? posts.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : posts;

  const activeTags =
    typeof searchParams.tag === 'string'
      ? [searchParams.tag]
      : searchParams.tag;

  filteredPosts = activeTags?.length
    ? filteredPosts.filter((p) => p.tags.some((t) => activeTags?.includes(t)))
    : filteredPosts;

  return (
    <>
      <div className="space-y-4 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Blogs
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Being able to share what I know through these posts is truly a delight
          for me. May you pick up a thing or two from these. 😊
        </p>
      </div>
      <Search query={searchQuery} />
      <FilterTags tags={tags} />
      {filteredPosts.length === 0 && (
        <div>
          <p>No posts found. Try another keyword.</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
        {filteredPosts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
      {posts.length > 15 && (
        <div className="my-10">
          <button className="bg-primary hover:bg-primary/95 text-white font-medium py-4 px-8 rounded-full shadow-md">
            Load More Posts
          </button>
        </div>
      )}
    </>
  );
}

export default BlogsPage;
