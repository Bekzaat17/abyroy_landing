import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Міндетті параметр
  images: {
    unoptimized: true, // Next.js Image компоненті статикалық экспортта осылай жұмыс істейді
  },
};

export default nextConfig;
