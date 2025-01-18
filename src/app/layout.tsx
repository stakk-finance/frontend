import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/common/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Stakk Finance - AI Powered Staking",
  description: "Maximize Your Yield with AI-Powered Staking",
  openGraph: {
    title: "Stakk Finance - AI Powered Staking",
    description: "Maximize Your Yield with AI-Powered Staking",
    url: "https://stakk.finance",
    siteName: "Stakk Finance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stakk Finance - AI Powered Staking",
    description: "Maximize Your Yield with AI-Powered Staking",
    images: ["/images/social-preview.png"],
    creator: "@stakkfinance",
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
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
