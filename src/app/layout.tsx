import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "@/widgets";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shopper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Providers>
            <Header />
            {children}
        </Providers>
      </body>
    </html>
  );
}
