import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedNavLink from "../components/animated-nav-link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharif | Software Engineer",
  description: "Software Engineer crafting elegant digital solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white relative`}>
        {/* Fullscreen background image */}
        <div
          className="fixed inset-0 w-full h-full z-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 1,
          }}
        />
        <header className="flex items-center justify-between px-4 py-6 sm:px-12 relative z-10">
          <nav className="flex gap-8 text-lg font-mono">
            <AnimatedNavLink href="#"><span className="font-bold">HOME</span></AnimatedNavLink>
            <AnimatedNavLink href="#projects">PROJECTS</AnimatedNavLink>
            <AnimatedNavLink href="#labs">LAB</AnimatedNavLink>
          </nav>
        </header>
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
