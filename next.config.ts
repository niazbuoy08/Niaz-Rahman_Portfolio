import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Static export has no image-optimisation server; assets in /public are pre-optimised.
  images: { unoptimized: true },
};

export default nextConfig;
