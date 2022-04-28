/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/pet-care",
  assetPrefix: "/pet-care",
  images: {
    loader: "default",
    path: "/",
  },
};

module.exports = nextConfig;
