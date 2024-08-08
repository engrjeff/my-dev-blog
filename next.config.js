const { withContentlayer } = require('next-contentlayer');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    turbotrace: {},
  },
  // experimental: {
  //   outputFileTracingIncludes: {
  //     '/blogs/file-tree-component-using-react-server-components-and-tailwindcss':
  //       ['./app', './components/FileTree/example'],
  //   },
  // },
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
