import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable modern image optimization with AVIF and WebP support
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 85],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },

  // Enable compression
  compress: true,
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['motion/react', 'gsap'],
  },

  // PoweredByHeader disabled for security
  poweredByHeader: false,

  // Target modern browsers only for smaller bundle sizes
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
