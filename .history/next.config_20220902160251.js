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

export const server = dev
  ? "http://localhost:3000"
  : "https://your_deployment.server.com";

module.exports = nextConfig;
