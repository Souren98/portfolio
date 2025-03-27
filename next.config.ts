import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add Sanity's CDN to allowed domains
  },/* config options here */
};

export default nextConfig;
