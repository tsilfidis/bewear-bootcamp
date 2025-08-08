import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beewear",
  description: "Ecomerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} mb-5 antialiased sm:h-full`}
      >
        {children}
        <Toaster className="text-primary" position="bottom-center" richColors />
      </body>
    </html>
  );
}
