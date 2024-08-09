const { withContentlayer } = require('next-contentlayer');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbotrace: {},
    // outputFileTracingIncludes: {
    //   '/blogs/file-tree-component-using-react-server-components-and-tailwindcss':
    //     ['./app', './components/FileTree/example'],
    // },
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
