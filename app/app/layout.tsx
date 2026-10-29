import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = localFont({ src: "./fonts/GeistVF.woff", variable: "--font-inter", weight: "100 900" });

export const metadata: Metadata = {
  title: "Hassan Rajput | AI Engineer",
  description: "AI Engineer focused on computer vision and medical image analysis.",
  icons: { icon: "/profile.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
