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
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yungsun Plastic Industry - Industrial Packaging Machinery",
  description: "Pakistan's leading provider of industrial packaging machinery and equipment. Specializing in carton sealers, strapping machines, conveyors, and complete packaging solutions.",
  keywords: "packaging machinery, industrial equipment, carton sealer, strapping machine, conveyor, Pakistan",
  openGraph: {
    title: "Yungsun Plastic Industry",
    description: "Industrial Packaging Machinery & Equipment",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QuoteProvider>
          <HeaderWrapper />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </QuoteProvider>
      </body>
    </html>
  );
}
