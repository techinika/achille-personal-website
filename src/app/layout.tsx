import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Sides/Footer";

export const metadata: Metadata = {
  title: "Cishahayo Songa Achille",
  description: "Experienced Entrepreneur, Business Coach, and technical support engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <header></header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
