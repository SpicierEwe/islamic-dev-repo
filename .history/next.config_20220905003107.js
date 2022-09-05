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
      "cdn-icons-png.flaticon.com",
      "i0.wp.com",
      "en.quran.com.kw",
      "download1585.mediafire.com",
      "cdn.icon-icons.com",
    ],
  },
};

module.exports = nextConfig;
