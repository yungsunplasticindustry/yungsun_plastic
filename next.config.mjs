/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images - use Vercel's image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yungsunplastic.com',
      },
    ],
  },
  
  // Ensure trailing slashes for better SEO
  trailingSlash: true,
  
  // Skip TypeScript errors during builds if needed
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://yungsunplastic.com',
  },
}

export default nextConfig
