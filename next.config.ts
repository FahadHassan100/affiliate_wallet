import type { NextConfig } from "next";

const nextConfig:NextConfig = {
  /* config options here */
  assetPrefix: '/my-wallet',
  // 2. Set basePath (Next.js 12+) to handle subpath routing

  // 3. Configure Images to respect the subpath for internal routing/optimization
  images: {
    // This tells the optimizer where the images will be served from
    path: '/my-wallet/_next/image',
    // Allow the original domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'philanthroceuticals.com',
      },
    ],
  },
  output: "standalone",
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
};

export default nextConfig;
