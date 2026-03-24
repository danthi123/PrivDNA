import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
});

export const metadata: Metadata = {
  title: "PrivDNA — Your Genome. Your Hands. No Copies.",
  description:
    "Air-gapped whole genome sequencing. Open source pipeline. Zero data retention. Manhattan, NYC.",
  openGraph: {
    title: "PrivDNA — Your Genome. Your Hands. No Copies.",
    description:
      "Air-gapped whole genome sequencing. Open source pipeline. Zero data retention.",
    url: "https://privdna.com",
    siteName: "PrivDNA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrivDNA — Your Genome. Your Hands. No Copies.",
    description:
      "Air-gapped whole genome sequencing. Open source pipeline. Zero data retention.",
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
      <body className="font-sans">
        <SmoothScroll>
          <a href="#waitlist" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-accent focus:text-bg-primary focus:px-4 focus:py-2 focus:rounded-full">
            Skip to waitlist
          </a>
          <CustomCursor />
          {children}
        </SmoothScroll>
        {rybbitSiteId && (
          <Script
            src={`${rybbitUrl}/api/script.js`}
            data-site-id={rybbitSiteId}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
