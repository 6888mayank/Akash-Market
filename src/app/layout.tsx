import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akashmarket.com"),
  title: {
    default: "AKASH — You Build the Product. We Build to Sell.",
    template: "%s | AKASH — B2B Sales & Market Expansion",
  },
  description:
    "AKASH helps manufacturers, wholesalers, suppliers and product owners find potential buyers, explore bulk orders, build distributor relationships and expand into B2B and B2C markets.",
  keywords: [
    "B2B Sales",
    "Market Expansion",
    "Product Distribution",
    "Wholesale Buyers",
    "Manufacturer Sales",
    "Distributor Network",
    "Bulk Orders",
    "Corporate Purchasing",
    "Retail Distribution",
    "AKASH Sales",
  ],
  authors: [{ name: "AKASH Enterprise" }],
  creator: "AKASH",
  publisher: "AKASH",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akashmarket.com",
    title: "AKASH — You Build the Product. We Build to Sell.",
    description:
      "Your Product. Our Sales Expertise. Unlocking bulk buyers, distribution channels, and nationwide market expansion for product manufacturers.",
    siteName: "AKASH",
  },
  twitter: {
    card: "summary_large_image",
    title: "AKASH — You Build the Product. We Build to Sell.",
    description:
      "B2B sales and market expansion company connecting product owners with vetted buyers, dealers, and distributors.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#06142B] text-white flex flex-col font-sans selection:bg-[#2684FF] selection:text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
