import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MusicPlayer from "@/components/MusicPlayer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "我的博客",
  description: "个人博客网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <MusicPlayer />
      </body>
    </html>
  );
} 