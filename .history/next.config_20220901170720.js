/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "upload.wikimedia.org", "img1.pnghut.com"],
  },
};

module.exports = nextConfig;
