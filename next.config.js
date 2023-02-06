/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: false
  },
  env: {
    REACT_SERVER_URL: process.env.REACT_SERVER_URL
  },
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: 'http://localhost:4200/uploads/:path*' // Matched parameters can be used in the destination
      }
    ];
  }
};
// rewrites
module.exports = nextConfig;
