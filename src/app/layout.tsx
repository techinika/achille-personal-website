import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://achillesonga.com"),
  title: {
    default: "Cishahayo Songa Achille | Software Engineer | Entrepreneur | Educator",
    template: "%s | Cishahayo Songa Achille",
  },
  description:
    "Empowering individuals and teams to grow through storytelling, strategy, and digital skills. Software Engineer, Entrepreneur, Educator, and Public Speaker based in Rwanda.",
  keywords: [
    "Cishahayo Songa Achille",
    "Software Engineer",
    "Entrepreneur",
    "Educator",
    "Public Speaker",
    "Rwanda",
    "Techinika",
    "Digital Skills",
    "Business Coach",
  ],
  authors: [{ name: "Cishahayo Songa Achille" }],
  creator: "Cishahayo Songa Achille",
  publisher: "Cishahayo Songa Achille",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://achillesonga.com",
    siteName: "Cishahayo Songa Achille",
    title: "Cishahayo Songa Achille | Software Engineer | Entrepreneur | Educator",
    description:
      "Empowering individuals and teams to grow through storytelling, strategy, and digital skills.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cishahayo Songa Achille",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cishahayo Songa Achille",
    description:
      "Empowering individuals and teams to grow through storytelling, strategy, and digital skills.",
    images: ["/og-image.jpg"],
    creator: "@achillesonga",
  },
  alternates: {
    canonical: "https://achillesonga.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cishahayo Songa Achille",
  url: "https://achillesonga.com",
  jobTitle: ["Software Engineer", "Entrepreneur", "Educator", "Public Speaker"],
  description:
    "Empowering individuals and teams to grow through storytelling, strategy, and digital skills.",
  sameAs: [
    "https://www.linkedin.com/in/achillesonga",
    "https://twitter.com/achillesonga",
    "https://github.com/achillesonga",
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "Techinika",
      url: "https://techinika.co.rw",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-7VMEVDT21V" />
      </body>
    </html>
  );
}
