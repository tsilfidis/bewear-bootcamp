import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d4lgxe9bm8juw.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
