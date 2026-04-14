import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#111113",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "PrivDNA — Your Genome. Your Hands. No Copies.",
  description:
    "Air-gapped whole genome sequencing. Open source pipeline. Zero data retention. Manhattan, NYC.",
  alternates: { canonical: "https://privdna.com" },
  icons: {
    icon: [{ url: "/icon-512.png", sizes: "512x512", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "PrivDNA — Your Genome. Your Hands. No Copies.",
    description:
      "Air-gapped whole genome sequencing. Open source pipeline. Zero data retention.",
    url: "https://privdna.com",
    siteName: "PrivDNA",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PrivDNA — Your genome. Your hands. No copies.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrivDNA — Your Genome. Your Hands. No Copies.",
    description:
      "Air-gapped whole genome sequencing. Open source pipeline. Zero data retention.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rybbitSiteId = process.env.RYBBIT_SITE_ID;
  const rybbitUrl = process.env.RYBBIT_URL || "https://app.rybbit.io";

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {rybbitSiteId && (
          <script
            src={`${rybbitUrl}/api/script.js`}
            data-site-id={rybbitSiteId}
            async
            defer
          />
        )}
      </head>
      <body className="font-sans">
        <SmoothScroll>
          <a href="#waitlist" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-accent focus:text-bg-primary focus:px-4 focus:py-2 focus:rounded-full">
            Skip to waitlist
          </a>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
