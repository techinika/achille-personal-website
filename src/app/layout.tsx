import type { Metadata } from "next";
import "./globals.css";

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
      </body>
    </html>
  );
}
