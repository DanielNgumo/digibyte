/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Configure custom quality levels - ADD 80 here
    qualities: [75, 80, 85, 90],
    
    // Image formats to use (modern formats first)
    formats: ['image/avif', 'image/webp'],
    
    // Enable image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 280, 350, 384, 500, 640, 750, 1024],
    
    // Minimize layout shift
    minimumCacheTTL: 60,
    
    // Optional: Add domains if you use external images
    // domains: ['example.com'],
    
    // Optional: Add remote patterns for external images
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'example.com',
    //     port: '',
    //     pathname: '/images/**',
    //   },
    // ],
  },
  
  // Optimize production builds
  reactStrictMode: true,
  
  // Optimize CSS - experimental feature
  experimental: {
    optimizeCss: true,
  },
  
  // Enable compiler optimization (replaces swcMinify in Next.js 14+)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  // Turbopack configuration (Next.js 16+)
  turbopack: {
    resolveAlias: {},
  },
};

module.exports = nextConfig;