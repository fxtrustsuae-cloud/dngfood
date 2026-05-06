import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "DNG FoodStuff | Premium Agro Commodities Import & Export",
  description:
    "DNG FoodStuff is a leading agro trading company specializing in the import and export of premium food commodities including rice, sugar, pulses, grains, and edible oils. Trusted globally.",
  keywords:
    "agro trading, food commodities, rice export, sugar import, pulses, grains, edible oil, DNG FoodStuff, food trade",
  openGraph: {
    title: "DNG FoodStuff | Premium Agro Commodities",
    description:
      "Global leader in premium agro commodity trading — rice, sugar, pulses, grains, and edible oils.",
    type: "website",
    locale: "en_US",
    siteName: "DNG FoodStuff",
  },
  twitter: {
    card: "summary_large_image",
    title: "DNG FoodStuff | Premium Agro Commodities",
    description: "Global leader in premium agro commodity trading.",
  },
  icons: {
    icon: "/images/mini-logo-icon.png",
    shortcut: "/images/mini-logo-icon.png",
    apple: "/images/mini-logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/mini-logo-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/mini-logo-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700;800;900&display=swap"
        />
      </head>
      <body>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#0B5D3B",
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
            },
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
