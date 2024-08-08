const { withContentlayer } = require('next-contentlayer');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputFileTracingIncludes: {
      '/file-tree-app': ['./app'],
      '/file-tree-example': ['./components/FileTree/example'],
    },
  },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = withContentlayer(nextConfig);
