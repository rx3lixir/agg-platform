import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myzmp7ub1y.ufs.sh",
        pathname: "/**", // разрешить любые пути
      },
    ],
  },
};

module.exports = nextConfig;
