"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const REBRAND_MESSAGES = [
  "Crafting something extraordinary",
  "Redefining digital excellence", 
  "Building tomorrow's standards",
  "Elevating the experience",
  "Creating something timeless",
  "Designing with intention",
  "Shaping the future",
  "Perfecting every detail"
] as const;

const PROGRESS_STEPS = [
  { label: "Vision", progress: 100, status: "complete" },
  { label: "Strategy", progress: 100, status: "complete" },
  { label: "Design", progress: 85, status: "active" },
  { label: "Development", progress: 45, status: "pending" },
  { label: "Launch", progress: 0, status: "pending" }
] as const;

export default function Home() {
  const [messageIdx, setMessageIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setMessageIdx((idx) => (idx + 1) % REBRAND_MESSAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95" />
        
        {/* Animated geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-5"
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-8 sm:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-foreground/20 to-foreground/10 border border-foreground/20" />
            <span className="font-mono text-sm text-muted-foreground">SHARIF PARISH</span>
          </motion.div>
        </header>

        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-12 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-12"
            >
              <h1 
                className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "TrenchSlab, Inter, sans-serif",
                  fontWeight: "bold",
                  letterSpacing: "0.02em",
                }}
              >
                <span className="seamless-gradient-text">
                  Rebranding
                </span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-foreground/20 via-foreground/40 to-foreground/20 mx-auto rounded-full" />
            </motion.div>

            {/* Dynamic Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={messageIdx}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0.0, 0.2, 1]
                  }}
                  className="text-2xl md:text-3xl font-light text-muted-foreground font-serif"
                >
                  {REBRAND_MESSAGES[messageIdx]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-16 max-w-2xl mx-auto"
            >
              <p className="text-lg text-muted-foreground leading-relaxed font-mono">
                I am currently undergoing a complete transformation to deliver an even more 
                exceptional experience. Every detail is being carefully crafted to exceed 
                the highest standards of digital excellence.
              </p>
            </motion.div>

            {/* Progress Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-br from-background/80 to-background/60 border border-foreground/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-8 font-mono">Progress</h3>
                
                <div className="space-y-6">
                  {PROGRESS_STEPS.map((step, index) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                          step.status === 'complete' 
                            ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
                            : step.status === 'active'
                            ? 'bg-gradient-to-r from-blue-400 to-cyan-500 animate-pulse'
                            : 'bg-foreground/20'
                        }`} />
                        <span className="font-mono text-sm text-foreground/80">
                          {step.label}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-32 h-2 bg-foreground/10 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full transition-all duration-1000 ${
                              step.status === 'complete' 
                                ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
                                : step.status === 'active'
                                ? 'bg-gradient-to-r from-blue-400 to-cyan-500'
                                : 'bg-foreground/20'
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: isVisible ? `${step.progress}%` : 0 }}
                            transition={{ duration: 1.5, delay: 1.4 + index * 0.1 }}
                          />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground w-8 text-right">
                          {step.progress}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center"
            >
              <p className="text-muted-foreground mb-6 font-mono">
                In the meantime, feel free to reach out
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: "Email.", href: "mailto:hello@sharifparish.com", icon: "✉" },
                  { name: "LinkedIn", href: "https://linkedin.com/in/sharifparish", icon: "💼" },
                  { name: "GitHub", href: "https://github.com/saintparish4", icon: "⚡" }
                ].map((contact, index) => (
                  <motion.a
                    key={contact.name}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-background/80 to-background/60 border border-foreground/10 rounded-xl hover:border-foreground/20 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-foreground/5"
                  >
                    <span className="text-lg">{contact.icon}</span>
                    <span className="font-mono text-sm">{contact.name}</span>
                    <motion.svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M14 3h7v7m0-7L10 14m-7 7h7v-7" />
                    </motion.svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="px-4 sm:px-12 py-8 border-t border-foreground/10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground font-mono">
              © 2024 Sharif Parish. All rights reserved.
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
