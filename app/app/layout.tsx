import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";

// Professional fonts for the portfolio
const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter",
  display: 'swap',
});

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


export const metadata: Metadata = {
  title: "Hassan Rajput Portfolio",
  description: "Full Stack Web Developer - Building modern web applications with clean code and exceptional user experiences",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Hassan Rajput" }],
  openGraph: {
    title: "Hassan Rajput Portfolio",
    description: "Full Stack Web Developer - Building modern web applications",
    type: "website",
  },
  icons: {
    icon: '/profile picture.png',
    shortcut: '/profile picture.png',
    apple: '/profile picture.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
