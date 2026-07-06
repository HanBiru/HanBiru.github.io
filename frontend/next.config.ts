import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages.
  output: "export",
  devIndicators: false,
  // Pin the workspace root so Turbopack doesn't pick up a parent lockfile.
  turbopack: {
    root: __dirname,
  },
  images: {
    // GitHub Pages has no image optimization server.
    unoptimized: true,
    localPatterns: [
      // Allow /images/* with query strings (e.g. ?v=1 for cache busting)
      { pathname: "/images/**" },
    ],
  },
};

export default nextConfig;
