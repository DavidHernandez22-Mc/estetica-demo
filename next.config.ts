import type { NextConfig } from "next";

// 100 % static site: `next build` writes plain HTML/CSS/JS to `out/`,
// served by Cloudflare Workers static assets (see wrangler.jsonc).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    // No image server in a static export: photos are pre-sized WebP in assets/img.
    unoptimized: true,
  },
  experimental: {
    // Multiple root layouts (app/(es), app/(en)) → one shared 404 page.
    globalNotFound: true,
  },
};

export default nextConfig;
