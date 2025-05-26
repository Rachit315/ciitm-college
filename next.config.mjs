/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    // Enable if you want to use the app directory
    appDir: true,
  },
  images: {
    domains: ['placeholder.svg', 'blob.v0.dev'],
    unoptimized: true,
  },
  // Disable source maps in production for smaller bundle size
  productionBrowserSourceMaps: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
