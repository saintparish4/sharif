'use client';
import { TextReveal } from '../animations/TextReveal';
import { useScrollTrigger } from '../../../hooks/useScrollTrigger';
import { motion } from 'motion/react';

export const Hero = () => {
  const heroRef = useScrollTrigger('#hero', {
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0, duration: 1.5 }
  });
  
  return (
    <section id="hero" ref={heroRef} className="min-h-svh bg-[var(--color-accent-200)] relative overflow-hidden">
      <div className="container mx-auto section-padding-x h-svh flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="custom-grid w-full">
            {/* Left Content */}
            <div className="col-span-12 lg:col-span-8 lg:col-end-7">
              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[length:var(--text-heading-display)] font-[700] leading-[80%] tracking-[var(--tracking-heading)] text-[var(--color-secondary-400)] mb-[var(--space-md)]"
              >
                <TextReveal text="TEST" delay={0.1} />
                <br />
                <TextReveal text="TEST" delay={0.3} />
              </motion.h1>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-[var(--space-md)]"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[var(--color-secondary-100)]">
                  <path d="M8 20L32 20M32 20L24 12M32 20L24 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="max-w-[40ch] mb-[var(--space-xl)]"
              >
                <p className="text-[var(--color-secondary-100)] text-[length:var(--text-base-large)] leading-base tracking-base font-[400]">
                  Open to job opportunities worldwide. Passionate about building polished, intuitive, 
                  and thoughtful digital experiences that leave a mark.
                </p>
              </motion.div>

              {/* Contact Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[var(--color-secondary-400)] text-[var(--color-secondary-50)] px-[var(--space-md)] py-[var(--space-xs)] rounded-full hover:bg-[var(--color-secondary-300)] transition-all duration-300 font-[500] tracking-wide custom-cursor-area group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-[var(--space-3xs)] text-[length:var(--text-base-small)]">
                  CONTACT
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M3 8L13 8M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </motion.button>
            </div>

            {/* Right Content - Image */}
            <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end items-center order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="relative"
              >
                <div className="3xl:w-96 2xl:w-72 w-full max-w-lg aspect-[4/3] bg-[var(--color-accent-400)] rounded-2xl overflow-hidden shadow-lg">
                  {/* Placeholder image - replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-[var(--color-accent-500)] to-[var(--color-accent-400)] flex items-center justify-center">
                    <span className="text-[var(--color-secondary-100)] font-montrealMono text-[length:var(--text-base-small)]">Portfolio Image</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Right Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="absolute bottom-[var(--space-lg)] right-[var(--space-lg)] text-right"
        >
          <div className="text-[var(--color-secondary-100)] text-[length:var(--text-mono)] font-montrealMono mb-[var(--space-3xs)] uppercase tracking-[var(--tracking-mono)]">
            Available for Work
          </div>
          <div className="text-[var(--color-secondary-400)] text-[length:var(--text-heading-4)] font-[700] font-montrealMono tracking-[var(--tracking-mono)]">
            JUN'25
          </div>
        </motion.div>
      </div>
    </section>
  );
};