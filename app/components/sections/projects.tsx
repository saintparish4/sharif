'use client';
import { motion, useReducedMotion } from 'motion/react';
import { useState, useMemo, useCallback, useEffect } from 'react';

// Move projects outside component to prevent recreation on every render
const projects = [
  {
    id: 1,
    title: 'Harmony Health',
    subtitle: 'Appointment booking application',
    description: 'Full-stack',
    year: '2025',
    link: 'https://nurabyzuned.netlify.app/',
    background: 'https://res.cloudinary.com/dnocsf5bq/image/upload/g_auto/v1/6_jugckf?_a=BAVAZGE70',
    video: 'QpLBMxnNQMQHXri9nqPfg1nZLyJn5kg01vXlmX1auvEc'
  },
  {
    id: 2,
    title: 'Job Portal',
    subtitle: 'Recruitment platform',
    description: 'Full-stack',
    year: '2025',
    link: 'https://zunedjobs.netlify.app/',
    background: 'https://res.cloudinary.com/dnocsf5bq/image/upload/g_auto/v1/3_nzf5vb?_a=BAVAZGE70',
    video: 'ZV01irv5jPmaRLo6XEcm5o4QHrEd9g6Rr5GyqdMd1R6g'
  },
  {
    id: 3,
    title: 'Productivity SaaS',
    subtitle: 'Task management platform',
    description: 'Full-stack',
    year: '2025',
    link: 'https://productivity-saas-zuned.netlify.app/',
    background: 'https://res.cloudinary.com/dnocsf5bq/image/upload/g_auto/v1/2_frjjt5?_a=BAVAZGE70',
    video: 'viGHALwiNN7x4lw9K5ieeljgwL3z02KfplK56WNafF9k'
  },
  {
    id: 4,
    title: 'CineRec',
    subtitle: 'ML recommendation engine',
    description: 'Python + ML',
    year: '2025',
    link: 'https://movierecommendation-sbjn.onrender.com/',
    background: 'https://res.cloudinary.com/dnocsf5bq/image/upload/g_auto/v1/7_lfufd9?_a=BAVAZGE70',
    video: '6XNHwd01zOc87HAEvIL44GrSDL5vNQv9WSo00o02aNEeRg'
  }
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
        <div className="flex flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)]">
          {/* Header */}
          <motion.h1 
            initial="hidden"
            whileInView="visible"
            variants={headerVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="section-heading relative text-[var(--color-accent-400)] text-[2.5rem] sm:text-[length:var(--text-h1-alt)]"
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
                className="w-full max-w-[50ch] text-balance text-[1rem] sm:text-[length:var(--text-heading-4)] font-medium leading-[1.5] text-[var(--color-secondary-50)]"
              >
                Recent projects combining functional design with clean implementation.
              </div>
            </motion.div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid-gap grid grid-cols-12 pt-[var(--space-lg)]">
          {/* Sticky Number Counter */}
          <div className="sticky top-[var(--space-lg)] col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] font-normal leading-[0.8] text-[var(--color-secondary-50)] md:flex">
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
          <aside className="relative col-span-12 flex flex-col gap-y-[var(--space-xl)] md:col-span-7 md:gap-y-[var(--space-2xl)]">
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
                  className="block group"
                >
                  {/* Project Image/Video Container - Optimized */}
                  <div className="custom-cursor-area relative mt-3 sm:mt-5 flex aspect-square items-center justify-center overflow-clip rounded-lg sm:rounded-xl bg-[var(--color-secondary-300)] p-[var(--space-sm)] sm:p-[var(--space-lg)] xl:p-[var(--space-2xl)] transition-transform duration-200 ease-out md:group-hover:scale-[1.01] active:scale-[0.99]">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        alt=""
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        fetchPriority={index === 0 ? "high" : "low"}
                        width={800}
                        height={800}
                        className="h-full w-full absolute object-cover object-center transition-transform duration-300 ease-out md:group-hover:scale-105" 
                        src={project.background}
                        style={{ 
                          position: 'absolute', 
                          height: '100%', 
                          width: '100%', 
                          inset: '0px', 
                          color: 'transparent',
                          contentVisibility: 'auto'
                        }}
                      />
                    </div>

                    {/* Video/Preview Container - Simplified structure */}
                    <div className="z-10 aspect-[4/3] w-full overflow-clip rounded-lg bg-gray-100 transition-transform duration-300 ease-out md:group-hover:scale-[0.98]">
                      {/* TODO: Replace with actual video player when ready */}
                      {/* <mux-player playback-id={project.video} autoplay="muted" loop preload="none" /> */}
                      <img 
                        src={project.background}
                        alt={project.title}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        fetchPriority={index === 0 ? "high" : "low"}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                        style={{ contentVisibility: 'auto' }}
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex flex-col justify-between gap-y-[var(--space-xs)] sm:gap-y-[var(--space-sm)] pt-[var(--space-xs)] lg:flex-row">
                    <div className="flex flex-col gap-y-[var(--space-3xs)]">
                      <span className="font-mono text-[0.8rem] sm:text-[length:var(--text-base-small)] font-medium text-[var(--color-secondary-50)] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-[var(--color-secondary-75)] cursor-default">
                        {project.subtitle}
                      </span>
                      <div className="w-fit text-[1.25rem] sm:text-[length:var(--text-heading-3)] font-semibold text-[var(--color-accent-400)] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-[var(--color-accent-500)] font-mono cursor-default">
                        {project.title}
                      </div>
                    </div>
                    <div className="flex items-end gap-x-[var(--space-3xs)] tracking-base text-[var(--color-secondary-50)] flex-wrap">
                      <span className="tag text-[0.7rem] sm:text-[var(--text-mono)]">{project.description}</span>
                      <span className="tag border-[var(--color-secondary-50)] bg-[var(--color-secondary-50)] text-[var(--color-secondary-400)] text-[0.7rem] sm:text-[var(--text-mono)]">
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