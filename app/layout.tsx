"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBarPage from "./layout/sidebar/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex gap-4 p-5">
          <div>
            <SideBarPage />
          </div>
          <div> {children}</div>
        </div>
      </body>
    </html>
  );
}
