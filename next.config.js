/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
