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

  env: {
    host_name:
      process.env.NODE_ENV == "development"
        ? "http://localhost:3000"
        : `https://${process.cwd}`,
    // host_name: "http://localhost:3000",
  },

  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig;
