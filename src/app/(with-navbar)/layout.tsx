import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bislerium",
  description: "The Bislerium Blog Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1 }}>
            <Navbar />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
