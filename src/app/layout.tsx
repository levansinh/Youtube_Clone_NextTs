import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box } from "@mui/material";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youtube",
  description: "Youtube clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
