import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Preload Montreal font family with optimized settings
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
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

// Preload Montreal Mono font with optimized settings
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
  preload: true,
  fallback: ["Courier New", "monospace"],
});

// Comprehensive metadata
export const metadata: Metadata = {
  title: {
    default: "Sharif Parish - Software Engineer",
    template: "%s | Sharif Parish",
  },
  description:
    "Portfolio of Sharif Parish - A passionate Software Engineer specializing in full-stack web development, modern UI/UX design, and scalable application architecture. Explore my projects built with React, Next.js, and cutting-edge web technologies.",
  keywords: [
    "Sharif Parish",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "UI/UX Design",
    "Frontend Development",
    "Backend Development",
    "GSAP",
    "Framer Motion",
    "TailwindCSS",
  ],
  authors: [{ name: "Sharif Parish", url: "https://sharifparish.com" }],
  creator: "Sharif Parish",
  publisher: "Sharif Parish",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sharif Parish - Software Engineer",
    description:
      "Explore the portfolio of Sharif Parish. Crafting exceptional digital experiences with modern web technologies.",
    url: "https://sharifparish.com",
    siteName: "Sharif Parish Portfolio",
    images: [
      {
        url: "https://sharifparish.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sharif Parish - Software Engineer Portfolio",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharif Parish - Software Engineer",
    description:
      "Software Engineer crafting exceptional digital experiences. Explore my projects and get in touch.",
    creator: "@SharifParish",
    images: ["https://sharifparish.com/og-image.jpg"],
  },
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  metadataBase: new URL("https://sharifparish.com"),
  alternates: {
    canonical: "/",
  },
  category: "technology",
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

// JSON-LD structured data for better SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sharif Parish",
  url: "https://sharifparish.com",
  jobTitle: "Software Engineer",
  description:
    "Full-stack Software Engineer specializing in modern web development",
  image: "https://sharifparish.com/og-image.jpg",
  sameAs: [
    "https://twitter.com/SharifParish",
    "https://github.com/sharifparish",
    "https://linkedin.com/in/sharifparish",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  knowsAbout: [
    "Software Engineering",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Full Stack Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data for rich search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />

        {/* Performance optimizations */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </head>
      <body
        className={`${montreal.variable} ${montrealMono.variable} font-montreal antialiased`}
      >
        {/* Optimized grain texture SVG - more performant than CSS backdrop-filter */}
        <svg
          width="0"
          height="0"
          className="absolute pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            <filter id="grainy" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                seed="2"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="discrete" tableValues="0 0 0 0.5 1" />
              </feComponentTransfer>
            </filter>
          </defs>
        </svg>

        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-[var(--color-secondary-400)] focus:text-[var(--color-accent-200)] focus:rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-600)]"
        >
          Skip to main content
        </a>

        {/* Main content wrapper with id for skip link */}
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}