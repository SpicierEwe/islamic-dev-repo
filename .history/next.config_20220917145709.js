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
      "upload.wikimedia.org",
      "cdn.britannica.com",
      "www.nicepng.com",
      "www.iconsdb.com",
      "cdn-icons-png.flaticon.com",
      "thumbs.dreamstime.com",
      "images.unsplash.com",
    ],
  },

  env: {},
  experimental: {
    scrollRestoration: true,
  },

  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig;
