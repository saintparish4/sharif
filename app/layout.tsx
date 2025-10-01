import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load Montreal font family
const montreal = localFont({
  src: [
    {
      path: "../public/fonts/Array-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Array-Semibold.woff2", 
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Array-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montreal",
  display: "swap",
});

// Load Montreal Mono font
const montrealMono = localFont({
  src: [
    {
      path: "../public/fonts/TrenchSlab-Bold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-montreal-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sharif Parish - Software Engineer",
  description: "Portfolio website of Zuned Aalim showcasing projects, skills, and contact information.",
  keywords: ["Zuned Aalim", "Software Engineer", "Portfolio", "Web Developer", "React", "Next.js"],
  authors: [{ name: "Sharif Parish" }],
  creator: "Sharif Parish",
  openGraph: {
      title: "Sharif Parish - Software Engineer",
    description: "Explore the portfolio of Sharif Parish. Software projects, web apps, and more.",
    url: "https://sharifparish.com",
    siteName: "Sharif Parish Portfolio",
    images: [{
      url: "https://sharifparish.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Sharif Parish Portfolio"
    }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharif Parish - Software Engineer",
    description: "Software projects, personal work, and contact info.",
    creator: "@SharifParish",
    images: ["https://sharifparish.com/og-image.jpg"],
  },
  robots: "index, follow",
  metadataBase: new URL("https://sharifparish.com"),
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e8e8e3" },
    { media: "(prefers-color-scheme: dark)", color: "#080807" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="lenis">
      <body className={`${montreal.variable} ${montrealMono.variable} font-montreal antialiased`}>
        <svg width="0" height="0" className="absolute">
          <defs>
            <filter id="grainy">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
