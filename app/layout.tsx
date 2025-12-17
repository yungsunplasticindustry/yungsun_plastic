import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import HeaderWrapper from "@/components/layout/HeaderWrapper";
import Footer from "@/components/layout/Footer";
import { QuoteProvider } from "@/providers/QuoteProvider";
import JsonLd, { organizationSchema, localBusinessSchema, websiteSchema } from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Not critical, can load later
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yungsunplastic.com'),
  title: {
    default: "Yungsun Plastic Industry - Industrial Packaging Machinery Pakistan",
    template: "%s | Yungsun Plastic Industry",
  },
  description: "Pakistan's leading provider of industrial packaging machinery and equipment. Specializing in carton sealers, strapping machines, conveyors, stretch films, and complete packaging solutions for industries.",
  keywords: [
    "packaging machinery Pakistan",
    "industrial packaging equipment",
    "carton sealer machine",
    "strapping machine",
    "conveyor systems",
    "stretch film",
    "POF shrink",
    "pallet wrapping machine",
    "PP strap roll",
    "plastic baskets",
    "plastic pallets",
    "packaging solutions Lahore",
    "industrial equipment Pakistan",
  ],
  authors: [{ name: "Yungsun Plastic Industry" }],
  creator: "Yungsun Plastic Industry",
  publisher: "Yungsun Plastic Industry",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://yungsunplastic.com/',
  },
  openGraph: {
    title: "Yungsun Plastic Industry - Industrial Packaging Machinery",
    description: "Pakistan's leading provider of industrial packaging machinery and equipment. Complete packaging solutions for all industries.",
    type: "website",
    locale: "en_US",
    url: 'https://yungsunplastic.com/',
    siteName: "Yungsun Plastic Industry",
    images: [
      {
        url: '/images/uploads/2023/11/yungsunplasticindustry-logo-2.png',
        width: 400,
        height: 150,
        alt: 'Yungsun Plastic Industry Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yungsun Plastic Industry',
    description: 'Industrial Packaging Machinery & Equipment in Pakistan',
    images: ['/images/uploads/2023/11/yungsunplasticindustry-logo-2.png'],
  },
  category: 'Industrial Equipment',
  other: {
    'geo.region': 'PK-PB',
    'geo.placename': 'Lahore',
    'geo.position': '31.5204;74.3587',
    'ICBM': '31.5204, 74.3587',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
        <QuoteProvider>
          <HeaderWrapper />
          <main className="min-h-screen ">{children}</main>
          <Footer />
        </QuoteProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
