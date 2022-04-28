/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    loader: "akamai",
    path: "/",
  },
  basePath: "/pet-care",
  assetPrefix: "/pet-care",
};

module.exports = nextConfig;
