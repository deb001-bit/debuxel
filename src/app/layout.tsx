import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Debuxel – AI Developer Toolkit",
  description:
    "Free AI-powered developer toolkit. Debug faster, explain code, generate READMEs, APIs, and architecture — all in one place.",
  keywords: [
    "developer tools",
    "AI bug fixer",
    "code explainer",
    "README generator",
    "API generator",
    "developer productivity",
    "free developer tools",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-192.png",
  },
  openGraph: {
    title: "Debuxel – AI Developer Toolkit",
    description:
      "Free AI-powered developer toolkit for debugging, code explanation, and documentation.",
    type: "website",
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5431681830037466"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
