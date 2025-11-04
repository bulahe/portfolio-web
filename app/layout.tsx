import type { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bulahe Chung Portfolio",
  description: "Hi~",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className="!scroll-smooth overflow-x-hidden md:overflow-x-visible"
    >
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 text-opacity-90 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 min-h-screen overflow-x-hidden md:overflow-x-visible`}
      >
        {children}
      </body>
    </html>
  );
}
