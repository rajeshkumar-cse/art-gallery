import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hema's Art Gallery",
  description: "A collection of beautiful artworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* This style tag defines the blink animation for the entire app */}
        <style>
          {`
            @keyframes blink {
              50% {
                opacity: 0;
              }
            }
          `}
        </style>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
