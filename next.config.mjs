/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: './dist',
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
