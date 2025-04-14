import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/general/Header";
import Footer from "@/components/general/Footer";

export const metadata: Metadata = {
  title: "Book a time with Achille Songa",
  description: "Booking page to meet Cishahayo Songa Achille",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
