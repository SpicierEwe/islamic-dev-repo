/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com" ,"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Adobe_Fonts.svg/1200px-Adobe_Fonts.svg.png"},
};

module.exports = nextConfig;
