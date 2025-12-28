import type { Metadata } from "next";
import { Public_Sans, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-sans" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Aerene Lace",
  description:
    "Leading Manufacturer, Seller, and Exporter of High-Quality Narrow Fabrics in India. Discover a wide range of GPO Lace (Guipure Lace), Elastic Tapes, and Embroidery Lace.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Aerene Lace",
    description:
      "Leading Manufacturer, Seller, and Exporter of High-Quality Narrow Fabrics in India. Discover a wide range of GPO Lace (Guipure Lace), Elastic Tapes, and Embroidery Lace.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerene Lace",
    description:
      "Leading Manufacturer, Seller, and Exporter of High-Quality Narrow Fabrics in India. Discover a wide range of GPO Lace (Guipure Lace), Elastic Tapes, and Embroidery Lace.",
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
        className={`${publicSans.variable} ${playfairDisplay.variable} antialiased font-sans min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
