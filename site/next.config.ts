import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  serverExternalPackages: ["better-sqlite3-multiple-ciphers", "nodemailer"],
  experimental: {
    optimizePackageImports: ["gsap", "lenis", "three"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              // Default: block everything not explicitly allowed
              "default-src 'self'",
              // Scripts: self + Rybbit analytics + Next.js inline scripts
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              // Styles: self + GSAP inline styles + component inline styles
              "style-src 'self' 'unsafe-inline'",
              // Images: self + data URIs (for inline SVGs/base64)
              "img-src 'self' data: blob:",
              // Fonts: self (next/font self-hosts)
              "font-src 'self'",
              // Connect: self + Rybbit API for analytics beacons
              "connect-src 'self' https://*.privdna.com",
              // WebGL needs blob: for shader compilation
              "worker-src 'self' blob:",
              // No iframes
              "frame-src 'none'",
              // No objects/embeds
              "object-src 'none'",
              // Form submissions only to self (waitlist + unsubscribe)
              "form-action 'self'",
              // Prevent framing
              "frame-ancestors 'none'",
              // Only upgrade HTTP requests
              "upgrade-insecure-requests",
              // Base URI restricted to self
              "base-uri 'self'",
            ].join("; "),
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
