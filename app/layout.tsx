import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/layout/HeaderWrapper";
import Footer from "@/components/layout/Footer";
import { QuoteProvider } from "@/providers/QuoteProvider";
import JsonLd, { organizationSchema } from "@/components/seo/JsonLd";

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
    default: "Yungsun Plastic Industry - Industrial Packaging Machinery",
    template: "%s | Yungsun Plastic Industry",
  },
  description: "Pakistan's leading provider of industrial packaging machinery and equipment. Specializing in carton sealers, strapping machines, conveyors, and complete packaging solutions.",
  keywords: ["packaging machinery", "industrial equipment", "carton sealer", "strapping machine", "conveyor", "Pakistan"],
  authors: [{ name: "Yungsun Plastic Industry" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Yungsun Plastic Industry",
    description: "Industrial Packaging Machinery & Equipment",
    type: "website",
    locale: "en_US",
    siteName: "Yungsun Plastic Industry",
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
        <QuoteProvider>
          <HeaderWrapper />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </QuoteProvider>
      </body>
    </html>
  );
}
