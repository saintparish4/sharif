import type { Metadata } from "next";
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
  title: "Sharif Parish | Full-Stack Developer",
  description: "Full-stack developer crafting polished, intuitive digital experiences. Available for worldwide opportunities.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Web Development"],
  authors: [{ name: "Sharif Parish" }],
  creator: "Sharif Parish",
  openGraph: {
    title: "Sharif Parish | Full-Stack Developer",
    description: "Full-stack developer crafting polished, intuitive digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharif Parish | Full-Stack Developer",
    description: "Full-stack developer crafting polished, intuitive digital experiences.",
    creator: "@saintparish4",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="lenis">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <filter id="grainy">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
        </svg>
      </head>
      <body className={`${montreal.variable} ${montrealMono.variable} font-montreal antialiased`}>
        {children}
      </body>
    </html>
  );
}
