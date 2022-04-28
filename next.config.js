/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    loader: "akamai",
    path: "/",
    domains: ["https://gianicolajara.github.io/pet-care/"],
  },
  basePath: "/pet-care",
  assetPrefix: "/pet-care",
};

module.exports = nextConfig;
