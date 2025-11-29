import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Cishahayo Songa Achille",
  description:
    "Experienced Entrepreneur, Business Coach, and technical support engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId="G-7VMEVDT21V" />
      </body>
    </html>
  );
}
