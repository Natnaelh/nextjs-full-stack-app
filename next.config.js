/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.pixabay.com', 'i.pravatar.cc'],
  },
};

module.exports = nextConfig;
