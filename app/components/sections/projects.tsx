'use client';
import { motion, useReducedMotion } from 'motion/react';
import { useState, useMemo, useCallback } from 'react';

// Move projects outside component to prevent recreation on every render
const projects = [
  {
    id: 1,
    title: 'NURA',
    subtitle: 'Modern Marketing Website',
    description: 'Development',
    year: '2025',
    link: 'https://nurabyzuned.netlify.app/',
    background: 'https://res.cloudinary.com/dnocsf5bq/image/upload/g_auto/v1/6_jugckf?_a=BAVAZGE70',
    video: 'QpLBMxnNQMQHXri9nqPfg1nZLyJn5kg01vXlmX1auvEc'
  },
  {
    id: 2,
    title: 'Job Portal',
    subtitle: 'Full-Stack Recruitment Platform',
    description: 'Development',
    year: '2025',
    link: 'https://zunedjobs.netlify.app/',
    background: 'https://res.cloudinary.com/dnocsf5bq/image/upload/g_auto/v1/3_nzf5vb?_a=BAVAZGE70',
    video: 'ZV01irv5jPmaRLo6XEcm5o4QHrEd9g6Rr5GyqdMd1R6g'
  },
  {
    id: 3,
    title: 'Productivity SAAS',
    subtitle: 'SAAS Platform',
    description: 'Development',
    year: '2025',
    link: 'https://productivity-saas-zuned.netlify.app/',
    background: 'https://res.cloudinary.com/dnocsf5bq/image/upload/g_auto/v1/2_frjjt5?_a=BAVAZGE70',
    video: 'viGHALwiNN7x4lw9K5ieeljgwL3z02KfplK56WNafF9k'
  },
  {
    id: 4,
    title: 'CineRec',
    subtitle: 'ML Recommendation Engine',
    description: 'Development',
    year: '2025',
    link: 'https://movierecommendation-sbjn.onrender.com/',
    background: 'https://res.cloudinary.com/dnocsf5bq/image/upload/g_auto/v1/7_lfufd9?_a=BAVAZGE70',
    video: '6XNHwd01zOc87HAEvIL44GrSDL5vNQv9WSo00o02aNEeRg'
  },
  {
    id: 5,
    title: 'Code2Img',
    subtitle: 'Code-to-Image Tool',
    description: 'Development',
    year: '2025',
    link: 'https://code2img-zuned.netlify.app/',
    background: 'https://res.cloudinary.com/dnocsf5bq/image/upload/g_auto/v1/1_phf5ng?_a=BAVAZGE70',
    video: 'KgB1H01cuYG14gDffVE1MPflRm4vG7z2YgTcsZN6Bplg'
  }
] as const;

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  // Memoize viewport enter handler
  const handleViewportEnter = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Optimized animation variants
  const headerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.7,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  }), [prefersReducedMotion]);

  const descriptionVariants = useMemo(() => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        delay: prefersReducedMotion ? 0 : 0.15,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  }), [prefersReducedMotion]);

  const projectCardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  }), [prefersReducedMotion]);

  const counterTransition = useMemo(() => ({
    duration: prefersReducedMotion ? 0.01 : 0.8,
    ease: [0.25, 0.1, 0.25, 1] as const
  }), [prefersReducedMotion]);

  return (
    <section id="Works">
      <div className="section-padding bg-[var(--color-secondary-400)]">
        <div className="flex flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)]">
          {/* Header */}
          <motion.h1 
            initial="hidden"
            whileInView="visible"
            variants={headerVariants}
            viewport={{ once: true, margin: "-50px" }}
            className="section-heading relative text-[var(--color-accent-400)]"
            style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: prefersReducedMotion ? 0 : 0.1,
                ease: "easeOut"
              }}
            >
              SELECTED WORKS /
            </motion.span>
          </motion.h1>

          {/* Description Section */}
          <div className="flex grid-cols-12 gap-x-[var(--gap-fluid)] md:grid">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={descriptionVariants}
              viewport={{ once: true, margin: "-50px" }}
              className="col-span-7 flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-2xs)] sm:flex-row md:col-start-6"
              style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
            >
              <span className="flex h-full text-[24px] font-medium uppercase text-nowrap text-[var(--color-secondary-75)]">
                (PROJECTS)
              </span>
              <motion.div 
                className="w-full max-w-[50ch] text-balance text-[length:var(--text-heading-4)] font-medium leading-base text-[var(--color-secondary-50)]"
                initial="hidden"
                whileInView="visible"
                variants={descriptionVariants}
                viewport={{ once: true, margin: "-50px" }}
                style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
              >
                Thoughtfully crafted digital experiences that blend utility and aesthetics into something functional, memorable, and refined.
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid-gap grid grid-cols-12 pt-[var(--space-lg)]">
          {/* Sticky Number Counter */}
          <div className="sticky top-12 col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] font-normal leading-[0.8] text-[var(--color-secondary-50)] md:flex">
            <span className="relative">0</span>
            <div className="relative">
              <motion.div 
                className="absolute flex h-full w-fit flex-col"
                animate={{ 
                  transform: `translateY(-${activeIndex * 100}%)` 
                }}
                transition={counterTransition}
                style={{
                  willChange: prefersReducedMotion ? 'auto' : 'transform',
                  backfaceVisibility: 'hidden'
                }}
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
                viewport={{ once: true, margin: "-150px" }}
                onViewportEnter={() => handleViewportEnter(index)}
                className="@container project-card"
                data-index={index}
                style={{
                  willChange: prefersReducedMotion ? 'auto' : 'transform',
                  contain: 'layout style paint'
                }}
              >
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  {/* Project Image/Video Container */}
                  <div className="custom-cursor-area relative mt-5 flex aspect-square items-center justify-center overflow-clip rounded-md bg-[var(--color-secondary-300)] p-[var(--space-md)] sm:p-[var(--space-lg)] xl:p-[var(--space-2xl)]">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        alt={`${project.title} background`}
                        loading="lazy" 
                        decoding="async"
                        fetchPriority={index === 0 ? "high" : "low"}
                        className="h-full w-full absolute object-cover object-center transition-opacity duration-700 ease-in-out" 
                        src={project.background}
                        style={{ 
                          position: 'absolute', 
                          height: '100%', 
                          width: '100%', 
                          inset: '0px', 
                          color: 'transparent',
                          willChange: 'opacity'
                        }}
                      />
                    </div>

                    {/* Video/Preview Container - Simplified structure */}
                    <div className="z-10 aspect-[4/3] w-full overflow-clip rounded-lg bg-gray-100">
                      {/* TODO: Replace with actual video player when ready */}
                      {/* <mux-player playback-id={project.video} autoplay="muted" loop preload="none" /> */}
                      <img 
                        src={project.background}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        fetchPriority={index === 0 ? "high" : "low"}
                        className="h-full w-full object-cover"
                        style={{ willChange: 'opacity' }}
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex flex-col justify-between gap-y-[var(--space-sm)] pt-[var(--space-xs)] lg:flex-row">
                    <div className="flex flex-col gap-y-[var(--space-3xs)]">
                      <span className="font-mono text-[length:var(--text-base-small)] font-medium text-[var(--color-secondary-50)]">
                        <h1 className="font-mono cursor-default">{project.subtitle}</h1>
                      </span>
                      <div className="w-fit text-[length:var(--text-heading-3)] font-semibold text-[var(--color-accent-400)]">
                        <h1 className="font-mono cursor-default">{project.title}</h1>
                      </div>
                    </div>
                    <div className="flex items-end gap-x-[var(--space-3xs)] tracking-base text-[var(--color-secondary-50)]">
                      <span className="tag">{project.description}</span>
                      <span className="tag border-[var(--color-secondary-50)] bg-[var(--color-secondary-50)] text-[var(--color-secondary-400)]">
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