'use client';
import { motion, useReducedMotion } from 'motion/react';
import { useState, useMemo, useCallback, useEffect } from 'react';

// Move projects outside component to prevent recreation on every render
const projects = [
  {
    id: 1,
    title: 'Nora Health',
    subtitle: 'Medical AI Booking Platform',
    description: 'Full-stack',
    year: '2025',
    link: 'https://mai-omega.vercel.app/get-care',
    background: '/projects/nora.jpg',
    video: '/videos/nora.mp4'
  },
  {
    id: 2,
    title: 'Stealth',
    subtitle: 'Smart Contract Security Scanner',
    description: 'WEB3 Smart Contracts',
    year: '2025',
    link: 'https://stealth-plum-beta.vercel.app/',
    background: '/projects/dpe.jpg',
    video: '/videos/stealth.mp4'
  },
  {
    id: 3,
    title: 'Winter Square',
    subtitle: 'Lock-free market data infrastructure',
    description: 'C++ Infrastructure',
    year: '2025',
    link: 'https://github.com/saintparish4/winter-square',
    background: '/projects/antler.jpg',
    video: 'viGHALwiNN7x4lw9K5ieeljgwL3z02KfplK56WNafF9k'
  },
  {
    id: 4,
    title: 'APX',
    subtitle: 'Decentralized Healthcare Claims Verification System',
    description: 'WEB3 Healthcare',
    year: '2025',
    link: 'https://github.com/saintparish4/apx',
    background: '/projects/apx.jpg',
    video: '/videos/apx.mp4'
  },
] as const;

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotionBrowser = useReducedMotion();
  
  // Stable fallback: always false until mounted
  const prefersReducedMotion = mounted ? (prefersReducedMotionBrowser ?? false) : false;

  // Update after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize viewport enter handler
  const handleViewportEnter = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Simplified animation variants for better performance
  const headerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.4,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  }), [prefersReducedMotion]);

  const descriptionVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.3,
        delay: prefersReducedMotion ? 0 : 0.1,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  }), [prefersReducedMotion]);

  const projectCardVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.3,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  }), [prefersReducedMotion]);

  const counterTransition = useMemo(() => ({
    duration: prefersReducedMotion ? 0.01 : 0.4,
    ease: [0.4, 0, 0.2, 1] as const
  }), [prefersReducedMotion]);

  return (
    <section id="Works" className="bg-[var(--color-secondary-400)] border-t border-t-[rgba(168,164,160,0.2)]">
      <div className="section-padding">
        <div className="relative flex w-full flex-col gap-y-[var(--space-md)] md:gap-y-[var(--space-lg)] pb-8 md:pb-16">
          {/* Header */}
          <motion.h1 
            initial="hidden"
            whileInView="visible"
            variants={headerVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="section-heading col-span-6 max-w-[18ch] text-[var(--color-accent-400)] text-[2rem] sm:text-[2.25rem] md:text-[length:var(--text-h1-alt)]"
            suppressHydrationWarning
          >
            <span>
              Selected work
            </span>
          </motion.h1>

          {/* Description Section */}
          <div className="flex grid-cols-12 gap-x-[var(--gap-fluid)] md:grid">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={descriptionVariants}
              viewport={{ once: true, amount: 0.3 }}
              className="col-span-7 flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-xs)] sm:flex-row md:col-start-6"
              suppressHydrationWarning
            >
              <div 
                className="w-full max-w-[50ch] text-balance text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[var(--color-secondary-50)]"
              >
                Recent projects combining functional design with clean implementation.
              </div>
            </motion.div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid-gap grid grid-cols-12">
          {/* Sticky Number Counter - Hidden on mobile/tablet */}
          <div className="sticky top-[var(--space-lg)] col-span-5 hidden h-fit w-full overflow-hidden text-[12vw] lg:text-[16vw] font-normal leading-[0.8] text-[var(--color-secondary-50)] lg:flex">
            <span className="relative">0</span>
            <div className="relative">
              <motion.div 
                className="absolute flex h-full w-fit flex-col"
                animate={{ 
                  transform: `translateY(-${activeIndex * 100}%)` 
                }}
                transition={counterTransition}
                style={{
                  backfaceVisibility: 'hidden'
                }}
                suppressHydrationWarning
              >
                {projects.map((_, index) => (
                  <span key={index} className="inline-block">
                    {index + 1}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Projects List */}
          <aside className="relative col-span-12 flex flex-col gap-y-8 sm:gap-y-[var(--space-xl)] lg:col-span-7 lg:gap-y-[var(--space-2xl)]">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                variants={projectCardVariants}
                viewport={{ once: true, amount: 0.2 }}
                onViewportEnter={() => handleViewportEnter(index)}
                className="@container project-card"
                data-index={index}
                style={{
                  contain: 'layout style paint',
                  contentVisibility: 'auto'
                }}
                suppressHydrationWarning
              >
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group touch-manipulation"
                >
                  {/* Project Image/Video Container - Fully Responsive */}
                  <div className={`custom-cursor-area relative mt-3 sm:mt-4 md:mt-5 flex aspect-[4/5] sm:aspect-[4/5] md:aspect-square items-center justify-center overflow-clip rounded-xl sm:rounded-xl lg:rounded-2xl bg-[var(--color-secondary-300)] shadow-md sm:shadow-lg shadow-black/5 transition-all duration-300 sm:duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] active:scale-[0.97] sm:active:scale-[0.98] md:group-hover:scale-[1.02] md:group-hover:shadow-xl md:group-hover:shadow-black/10 ${project.video && project.video.endsWith('.mp4') ? 'p-1 sm:p-1.5 md:p-2' : 'p-2 sm:p-3 md:p-4 lg:p-6'}`}>
                    {/* Background Image with Enhanced Effects */}
                    <div className="absolute inset-0 overflow-hidden">
                      <img 
                        alt=""
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        fetchPriority={index === 0 ? "high" : "low"}
                        width={800}
                        height={800}
                        className="h-full w-full object-cover object-center transition-all duration-500 sm:duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] md:group-hover:scale-110 md:group-hover:blur-[2px]" 
                        src={project.background}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.opacity = '0';
                        }}
                        style={{ 
                          position: 'absolute', 
                          height: '100%', 
                          width: '100%', 
                          inset: '0px', 
                          color: 'transparent',
                          contentVisibility: 'auto'
                        }}
                      />
                      {/* Gradient Overlay for depth - lighter on mobile */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 sm:from-black/40 via-black/5 sm:via-black/10 to-transparent opacity-50 sm:opacity-60 transition-opacity duration-500 md:group-hover:opacity-70" />
                      {/* Vignette effect - subtler on mobile */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.15)_100%)] sm:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)] opacity-40 sm:opacity-50" />
                    </div>

                    {/* Video/Preview Container - Responsive */}
                    <div className={`z-10 overflow-clip rounded-xl sm:rounded-xl lg:rounded-2xl transition-all duration-300 sm:duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:group-hover:scale-[0.97] shadow-lg sm:shadow-2xl shadow-black/15 sm:shadow-black/20 ${project.video && project.video.endsWith('.mp4') ? 'aspect-[9/16] w-full h-full bg-transparent' : 'aspect-[4/3] w-full bg-[var(--color-secondary-200)]'}`}>
                      {project.video && project.video.endsWith('.mp4') ? (
                        <video
                          src={project.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload={index === 0 ? "auto" : "metadata"}
                          className="h-full w-full object-contain rounded-xl sm:rounded-xl lg:rounded-2xl ring-1 ring-white/10"
                          style={{ contentVisibility: 'auto' }}
                        />
                      ) : (
                        <img 
                          src={project.background}
                          alt={project.title}
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                          fetchPriority={index === 0 ? "high" : "low"}
                          width={800}
                          height={600}
                          className="h-full w-full object-cover object-center transition-transform duration-500 md:group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/projects/placeholder.jpg';
                          }}
                          style={{ contentVisibility: 'auto' }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Project Info - Fully Responsive Typography & Spacing */}
                  <div className="flex flex-col justify-between gap-y-2 sm:gap-y-3 md:gap-y-[var(--space-sm)] pt-3 sm:pt-4 md:pt-[var(--space-md)] lg:flex-row lg:items-end">
                    <div className="flex flex-col gap-y-0.5 sm:gap-y-1 md:gap-y-1.5">
                      <span className="font-mono text-[0.7rem] sm:text-[0.75rem] md:text-[0.8rem] font-medium uppercase tracking-wide sm:tracking-wider text-[var(--color-secondary-75)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:group-hover:text-[var(--color-secondary-50)] md:group-hover:tracking-widest">
                        {project.subtitle}
                      </span>
                      <div className="w-fit text-[1.1rem] sm:text-[1.25rem] md:text-[length:var(--text-heading-3)] font-bold text-[var(--color-accent-400)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:group-hover:text-[var(--color-accent-500)] md:group-hover:translate-x-1">
                        {project.title}
                      </div>
                    </div>
                    <div className="flex items-center gap-x-1.5 sm:gap-x-2 tracking-wide text-[var(--color-secondary-50)] flex-wrap mt-1 sm:mt-0">
                      <span className="tag px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] font-medium uppercase tracking-wide sm:tracking-wider border border-[var(--color-secondary-75)]/30 bg-[var(--color-secondary-300)]/50 backdrop-blur-sm transition-all duration-300 md:group-hover:border-[var(--color-secondary-50)]/50 md:group-hover:bg-[var(--color-secondary-300)]/70">
                        {project.description}
                      </span>
                      <span className="tag px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] font-semibold border-[var(--color-accent-400)] bg-[var(--color-accent-400)] text-[var(--color-secondary-400)] transition-all duration-300 md:group-hover:bg-[var(--color-accent-500)] md:group-hover:scale-105">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};