"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { useLenis } from "../hooks/useLenis";
import { useGSAPScrollAnimations } from "./components/animations/ScrollAnimations";
import { Hero } from "./components/sections/hero";
import { Navigation } from "./components/layout/navigation";

// Lazy load below-the-fold sections with optimized settings
const Services = dynamic(
  () => import("./components/sections/services").then((mod) => ({ default: mod.Services })),
  {
    loading: () => <SectionLoader />,
    ssr: true,
  }
);

const Projects = dynamic(
  () => import("./components/sections/projects").then((mod) => ({ default: mod.Projects })),
  {
    loading: () => <SectionLoader />,
    ssr: true,
  }
);

const About = dynamic(
  () => import("./components/sections/about").then((mod) => ({ default: mod.About })),
  {
    loading: () => <SectionLoader />,
    ssr: true,
  }
);

// Loading skeleton component
function SectionLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-[var(--color-secondary-400)] border-t-transparent rounded-full animate-spin" />
        <p className="text-[var(--color-secondary-100)] font-mono text-sm">Loading section...</p>
      </div>
    </div>
  );
}

// Loading screen component
function LoadingScreen({ progress }: { progress: number }) {
  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[99999999] bg-[var(--color-secondary-400)] flex items-center justify-center"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
    >
      <div className="text-center max-w-md px-4">
        {/* Main text */}
        <motion.div
          className="text-[var(--color-secondary-50)] text-[length:var(--text-heading-4)] font-[700] mb-[var(--space-md)] font-montrealMono tracking-[var(--tracking-mono)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          WELCOME TO MY MINDSPACE
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="relative w-full h-[2px] bg-[var(--color-secondary-300)] rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 bg-[var(--color-secondary-50)] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        {/* Percentage */}
        <motion.div
          className="mt-[var(--space-sm)] text-[var(--color-secondary-75)] font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {Math.round(progress)}%
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Initialize smooth scrolling and GSAP animations only after loading
  useLenis();
  useGSAPScrollAnimations();

  useEffect(() => {
    let mounted = true;
    let currentProgress = 0;
    const MIN_LOADING_TIME = 2500; // Minimum time to show loading screen (2.5s)
    const startTime = Date.now();

    // Helper function for smooth progress transitions
    const smoothProgress = (targetProgress: number, duration: number) => {
      return new Promise<void>((resolve) => {
        const startProgress = currentProgress;
        const diff = targetProgress - startProgress;
        const animStartTime = Date.now();
        
        const animate = () => {
          if (!mounted) {
            resolve();
            return;
          }

          const elapsed = Date.now() - animStartTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Ease out cubic for smooth deceleration
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const newProgress = startProgress + (diff * easeProgress);
          
          currentProgress = Math.min(newProgress, targetProgress);
          setLoadingProgress(currentProgress);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            resolve();
          }
        };
        
        requestAnimationFrame(animate);
      });
    };

    const checkResourcesLoaded = async () => {
      try {
        // Smoothly animate to 20% immediately
        if (mounted) {
          await smoothProgress(20, 300);
        }

        // Check if fonts are loaded
        if (document.fonts) {
          await document.fonts.ready;
          if (mounted) {
            // Smooth transition to 50%
            await smoothProgress(50, 400);
          }
        }

        // Wait for critical images (hero section)
        const criticalImages = document.querySelectorAll('img[priority], img[fetchpriority="high"]');
        if (criticalImages.length > 0) {
          const imagePromises = Array.from(criticalImages).map((img) => {
            return new Promise((resolve) => {
              const element = img as HTMLImageElement;
              if (element.complete) {
                resolve(true);
              } else {
                element.onload = () => resolve(true);
                element.onerror = () => resolve(true); // Resolve even on error to not block
              }
            });
          });

          await Promise.all(imagePromises);
          if (mounted) {
            // Smooth transition to 80%
            await smoothProgress(80, 400);
          }
        } else {
          // No critical images, mark as complete
          if (mounted) {
            await smoothProgress(80, 400);
          }
        }

        // Mark critical content as loaded
        if (mounted) {
          // Smooth transition to 95%
          await smoothProgress(95, 300);
        }

        // Ensure minimum loading time for smooth UX
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);
        
        if (remainingTime > 0) {
          await new Promise((resolve) => setTimeout(resolve, remainingTime));
        }

        // Final transition to 100%
        if (mounted) {
          await smoothProgress(100, 400);
          // Brief pause at 100% before hiding
          await new Promise((resolve) => setTimeout(resolve, 500));
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error loading resources:", error);
        // Fallback: ensure smooth transition even on error
        if (mounted) {
          const elapsedTime = Date.now() - startTime;
          const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);
          
          await new Promise((resolve) => setTimeout(resolve, remainingTime));
          await smoothProgress(100, 400);
          await new Promise((resolve) => setTimeout(resolve, 500));
          setIsLoading(false);
        }
      }
    };

    // Start checking resources after a brief delay
    const initTimeout = setTimeout(() => {
      checkResourcesLoaded();
    }, 100);

    // Fallback timeout - always show content after max 5 seconds
    const fallbackTimeout = setTimeout(() => {
      if (mounted && isLoading) {
        console.warn("Loading timeout - showing content");
        smoothProgress(100, 400).then(() => {
          setTimeout(() => {
            if (mounted) setIsLoading(false);
          }, 500);
        });
      }
    }, 5000);

    return () => {
      mounted = false;
      clearTimeout(initTimeout);
      clearTimeout(fallbackTimeout);
    };
  }, [isLoading]); // Include isLoading in dependency array

  // Disable scroll while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen progress={loadingProgress} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <Navigation />

            {/* Portfolio Sections */}
            <main>
              {/* Hero is always rendered (not lazy loaded) */}
              <Hero />

              {/* Below-the-fold sections are lazy loaded */}
              <Suspense fallback={<SectionLoader />}>
                <Services />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <Projects />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <About />
              </Suspense>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}