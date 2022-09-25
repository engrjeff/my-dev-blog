import { type PostWithoutBody } from './getSortedPosts';

export function getUniqueTagsFromPosts(posts: PostWithoutBody[]) {
  const tags = posts.map((post) => post.tags).flat();
  const uniqueTags = Array.from(new Set(tags));
  return uniqueTags;
}
