import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Pin the workspace root so Turbopack doesn't pick up a parent lockfile.
  turbopack: {
    root: __dirname,
  },
  images: {
    localPatterns: [
      // Allow /images/* with query strings (e.g. ?v=1 for cache busting)
      { pathname: "/images/**" },
    ],
  },
};

export default nextConfig;
