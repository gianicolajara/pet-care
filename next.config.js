/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/pet-care",
  assetPrefix: "/pet-care",
  images: {
    loader: "custom",
    path: "/pet-care",
  },
};

module.exports = nextConfig;
