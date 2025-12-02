/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for full static site generation
  output: 'export',
  
  // Optimize images
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Ensure trailing slashes for better static hosting
  trailingSlash: true,
  
  // Skip TypeScript errors during builds if needed
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Environment variables (can be added as needed)
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://yungsunplastic.com',
  },
}

export default nextConfig
