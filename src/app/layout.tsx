import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { auth } from "@/auth";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { Toaster } from "sonner";
import PrimeProvider from "@/services/providers";
import '@smastrom/react-rating/style.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joyous Shop",
  description: "The best shop in the world!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrimeProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster richColors />
          <Navbar />
          {children}
        </body>
      </html>
    </PrimeProvider>
  );
}
