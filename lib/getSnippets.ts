import { type Snippet, allSnippets } from '@contentlayer/generated';

export type SnippetWithoutBody = Omit<Snippet, 'body' | '_raw'>;

export default function getSnippets(): SnippetWithoutBody[] {
  const snippets = allSnippets.map<SnippetWithoutBody>((s) => ({
    _id: s._id,
    author: s.author,
    slug: s.slug,
    tags: s.tags,
    title: s.title,
    description: s.description,
    url: s.url,
    type: s.type,
  }));

  return snippets;
}
