import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  serverExternalPackages: ["better-sqlite3-multiple-ciphers", "nodemailer"],
  experimental: {
    optimizePackageImports: ["gsap", "lenis", "three"],
  },
};

export default nextConfig;
