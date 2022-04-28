/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    loader: "akamai",
    path: "/pet-care",
    domains: ["https://gianicolajara.github.io/"],
  },
  basePath: "/pet-care",
  assetPrefix: "/pet-care",
};

module.exports = nextConfig;
