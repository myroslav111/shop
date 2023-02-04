/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
