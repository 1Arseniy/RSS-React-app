import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  distDir: './dist',
  experimental: {
    globalNotFound: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [new URL('https://rickandmortyapi.com/api/character/**')],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
