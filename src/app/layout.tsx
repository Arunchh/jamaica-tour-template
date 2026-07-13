import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { siteConfig } from "@/config/site-config";
import { TawkWidget } from "@/components/layout/TawkWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: `${siteConfig.business.name} | Jamaica Resort Transfers & Tours`,
    template: `%s | ${siteConfig.business.name}`,
  },
  description: siteConfig.business.description,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.business.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.business.name,
    title: `${siteConfig.business.name} | Jamaica Resort Transfers & Tours`,
    description: siteConfig.business.description,
    images: [
      {
        url: siteConfig.hero.image,
        width: 1200,
        height: 630,
        alt: siteConfig.hero.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.business.name} | Jamaica Resort Transfers & Tours`,
    description: siteConfig.business.description,
    images: [siteConfig.hero.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.seo.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased">
        {children}
        <TawkWidget />
      </body>
    </html>
  );
}
