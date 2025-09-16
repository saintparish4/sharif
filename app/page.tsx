"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useLenis } from "../hooks/useLenis";
import { CustomCursor } from "./components/animations/customCursor";
import { useGSAPScrollAnimations } from "./components/animations/ScrollAnimations";
import { Hero } from "./components/sections/hero";
import { About } from "./components/sections/about";
import { Projects } from "./components/sections/projects";
import { Skills } from "./components/sections/skills";
import { Contact } from "./components/sections/contact";
import { Navigation } from "./components/layout/navigation";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize smooth scrolling and GSAP animations
  useLenis();
  useGSAPScrollAnimations();

  useEffect(() => {
    // Simulate loading time
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
            <CustomCursor />
            <Navigation />
            
            {/* Portfolio Sections */}
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}