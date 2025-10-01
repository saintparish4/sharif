"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { useLenis } from "../hooks/useLenis";
import { useGSAPScrollAnimations } from "./components/animations/ScrollAnimations";
import { Hero } from "./components/sections/hero";
import { Navigation } from "./components/layout/navigation";

// Lazy load below-the-fold sections for better performance
const Services = dynamic(() => import("./components/sections/services").then(mod => ({ default: mod.Services })), {
  loading: () => <div className="min-h-screen" />,
  ssr: true,
});

const Projects = dynamic(() => import("./components/sections/projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <div className="min-h-screen" />,
  ssr: true,
});

const About = dynamic(() => import("./components/sections/about").then(mod => ({ default: mod.About })), {
  loading: () => <div className="min-h-screen" />,
  ssr: true,
});


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize smooth scrolling and GSAP animations
  useLenis();
  useGSAPScrollAnimations();

  useEffect(() => {
    // Loading screen animation timing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[99999999] bg-[var(--color-secondary-400)] flex items-center justify-center"
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <div className="text-center">
              <motion.div
                className="text-[var(--color-secondary-50)] text-[length:var(--text-heading-4)] font-[700] mb-[var(--space-xs)] font-montrealMono tracking-[var(--tracking-mono)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                WELCOME TO MY MINDSPACE, ENJOY YOUR STAY!
              </motion.div>
              <motion.div
                className="w-20 h-[2px] bg-[var(--color-secondary-50)] mx-auto"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navigation />
            
            {/* Portfolio Sections */}
            <main>
              <Hero />
              <Suspense fallback={<div className="min-h-screen" />}>
                <Services />
              </Suspense>
              <Suspense fallback={<div className="min-h-screen" />}>
                <Projects />
              </Suspense>
              <Suspense fallback={<div className="min-h-screen" />}>
                <About />
              </Suspense>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}