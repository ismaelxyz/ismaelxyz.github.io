/* eslint-env node */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure Turbopack (no custom rules needed for this project)
  turbopack: {},

  // Standard Next.js options
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  trailingSlash: false,
};

module.exports = nextConfig;
