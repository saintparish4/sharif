"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Hero } from "./components/sections/hero";
import { Navigation } from "./components/layout/navigation";

// Lazy load below-the-fold sections with optimized settings
const About = dynamic(
  () => import("./components/sections/opensource").then((mod) => ({ default: mod.About })),
  {
    loading: () => <SectionLoader />,
    ssr: true,
  }
);

const Contact = dynamic(
  () => import("./components/sections/contact").then((mod) => ({ default: mod.Contact })),
  {
    loading: () => <SectionLoader />,
    ssr: true,
  }
);

const Footer = dynamic(
  () => import("./components/layout/footer").then((mod) => ({ default: mod.Footer })),
  {
    ssr: true,
  }
);

// Minimal loading skeleton component
function SectionLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-[var(--color-secondary-300)] animate-pulse" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Portfolio Sections */}
      <main>
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}