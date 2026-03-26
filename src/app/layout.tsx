import type { Metadata } from "next";
import { Cinzel, Raleway } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sandhya Granites — The Granite World",
  description:
    "Premium natural granite for kitchens, bathrooms, and floors. Direct from quarry with 500+ varieties. 15 years of excellence in natural stone.",
  icons: {
    icon: "/logo.png",
  },
  keywords: [
    "granite",
    "natural stone",
    "kitchen countertops",
    "bathroom granite",
    "granite flooring",
    "Black Galaxy",
    "Kashmir White",
    "Tan Brown",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${raleway.variable}`}>
      <body suppressHydrationWarning className="font-raleway antialiased bg-[#1C1C1C] text-cream">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
