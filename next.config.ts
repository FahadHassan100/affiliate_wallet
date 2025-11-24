import type { NextConfig } from "next";

const nextConfig:NextConfig = {
  /* config options here */
  assetPrefix: '/my-wallet',
  output: "standalone",
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
};

export default nextConfig;
