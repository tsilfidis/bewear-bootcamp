import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fsc-projects-static.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
