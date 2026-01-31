import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "OLAYODE AYOMIDE OLUWAFERANMI — Frontend Developer",
  description: "Frontend developer and technical founder.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1" suppressHydrationWarning>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
