import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { rehypePrettyCodeOptions } from './lib/rehypePrettyCode';
import readingTime from 'reading-time';

const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: 'posts/*.mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    author: {
      type: 'string',
      description: 'The author of the post',
      required: true,
    },
    bannerUrl: {
      type: 'string',
      description: 'The url of the banner for the post',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    publishedAt: {
      type: 'string',
      description: 'The date when the post was published',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
    url: {
      type: 'string',
      resolve: (post) => `/blogs/${post._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    },
    timeToRead: {
      type: 'string',
      resolve: (post) => readingTime(post.body.raw).text,
    },
  },
}));

const Snippet = defineDocumentType(() => ({
  name: 'Snippet',
  contentType: 'mdx',
  filePathPattern: 'snippets/*.mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the snippet',
      required: true,
    },
    description: {
      type: 'string',
      description: 'A short description of the snippet',
      required: true,
    },
    author: {
      type: 'string',
      description: 'The author of the snippet',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (snippet) => snippet._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
    url: {
      type: 'string',
      resolve: (snippet) => `/snippets/${snippet._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Snippet],
  mdx: {
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
  },
});
