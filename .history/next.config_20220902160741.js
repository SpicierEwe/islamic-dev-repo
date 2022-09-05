/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "upload.wikimedia.org",
      "previews.123rf.com",
      "img1.pnghut.com",
      "www.pngfind.com",
      "www.kindpng.com",
      "toppng.com",
    ],
  },
};

const dev = process.env.NODE_ENV !== "production";

const server = dev ? "http://localhost:3000" : `${process.env.VERCEL_URL}`;

module.exports = server;

module.exports = nextConfig;
