import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Nav/Header";
import Footer from "@/components/Footer";
import { Roboto } from "next/font/google";

const condensedFont = Roboto({weight: "500", subsets: ["cyrillic-ext"]})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${condensedFont.className} antialiased bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
