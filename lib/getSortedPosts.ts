import { type Post, allPosts } from '@contentlayer/generated';
import { compareDesc } from 'date-fns';

export type PostWithoutBody = Omit<Post, 'body'>;

/**
 *
 * @param n the number of posts to return
 * @returns Post array without body
 */
export default function getSortedPosts(n?: number): PostWithoutBody[] {
  return allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    })
    .slice(0, n ? n : allPosts.length)
    .map<Omit<Post, 'body'>>((post) => ({
      _id: post._id,
      _raw: post._raw,
      author: post.author,
      bannerUrl: post.bannerUrl,
      description: post.description,
      publishedAt: post.publishedAt,
      slug: post.slug,
      tags: post.tags,
      timeToRead: post.timeToRead,
      title: post.title,
      url: post.url,
      type: post.type,
    }));
}
