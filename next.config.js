/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY,
  },
};

module.exports = nextConfig;
