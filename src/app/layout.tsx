import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import Navbar from "@/components/ui/navbar";

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
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <StyledComponentsRegistry>
            <Navbar />
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </SessionProvider>
  );
}
