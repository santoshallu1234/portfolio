/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true }, // Ensure App Router is enabled
  output: "standalone", // Needed for deployment
};

module.exports = nextConfig;
