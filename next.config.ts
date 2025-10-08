import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable modern image optimization with AVIF and WebP support
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
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
};

export default nextConfig;
