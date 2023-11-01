import type { Metadata } from "next";
import Provider from "src/components/Provider"

import "./globals.css";

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
    <html lang="en" className='light'>
      <body>
      {children}
      </body>
    </html>
  );
}
