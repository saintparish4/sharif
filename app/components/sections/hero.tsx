// components/sections/Hero.tsx
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
    <section id="hero" ref={heroRef} className="min-h-screen bg-[#E8E4DA] relative overflow-hidden">
      <div className="container mx-auto px-8 h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-12 gap-8 w-full">
            {/* Left Content */}
            <div className="col-span-12 lg:col-span-7">
              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[8rem] md:text-[12rem] lg:text-[14rem] font-bold leading-[0.8] text-[#2A2A2A] mb-8"
                style={{ fontFamily: 'Array, sans-serif' }}
              >
                SHARIF PARISH
              </motion.h1>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-8"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[#666]">
                  <path d="M8 20L32 20M32 20L24 12M32 20L24 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="max-w-md mb-12"
              >
                <p className="text-[#666] text-lg leading-relaxed font-light">
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
                className="bg-[#2A2A2A] text-white px-8 py-4 rounded-full hover:bg-[#1A1A1A] transition-all duration-300 font-medium tracking-wide custom-cursor-area group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  CONTACT
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M3 8L13 8M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </motion.button>
            </div>

            {/* Right Content - Image */}
            <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="relative"
              >
                <div className="w-80 h-96 bg-white/50 rounded-lg overflow-hidden shadow-2xl">
                  {/* Placeholder image - replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600 font-mono text-sm">Portfolio Image</span>
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
          className="absolute bottom-8 right-8 text-right"
        >
          <div className="text-[#666] text-sm font-mono mb-2">AVAILABLE FOR WORK</div>
          <div className="text-[#2A2A2A] text-4xl font-bold" style={{ fontFamily: 'Array, sans-serif' }}>
            JUN'25
          </div>
        </motion.div>
      </div>
    </section>
  );
};