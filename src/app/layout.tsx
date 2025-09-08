import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "aftxrlifx | Game Breaker | Java Modder",
  description: "Portfolio of aftxrlifx - Game Breaker, Java Modder.",
  keywords: ["jaxx", "java", "kotlin", "python", "modding"],
  authors: [{ name: "aftxrlifx", url: "https://discord.com/users/849394277623922738/" }],
  creator: "aftxrlifx",
  publisher: "aftxrlifx",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aftxrlifx.site",
    title: "aftxrlifx | Game breaker | Java Modder",
    description: "Portfolio of aftxrlifx - Game breaker and Java Modder",
    siteName: "aftxrlifx Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
