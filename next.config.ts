import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tiskae.netlify.app",
      },
    ],
  },
};

export default nextConfig;
