/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    GEMINI_API_KEY: 'AIzaSyByz1kX_BkBcjmgvtSPfQlSvOeDUqyqgAI',
  },
};

export default nextConfig;
