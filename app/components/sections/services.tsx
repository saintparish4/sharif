'use client';
import { motion, useReducedMotion } from 'motion/react';
import { useMemo } from 'react';

export const Services = () => {
  const prefersReducedMotion = useReducedMotion();
  
  // Memoize services data to prevent recreation on every render
  const services = useMemo(() => [
    {
      id: 1,
      title: "Full-Stack Development",
      description: "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
      technologies: [
        "React, Next.js, Typescript, TanStack Query",
        "Node.js, Express, Python, Golang, Rust, C++, Solidity",
        "PostgreSQL, MongoDB, Redis, Elasticsearch, AWS, Docker"
      ]
    },
    {
      id: 2,
      title: "UI/UX & Frontend",
      description: "Design is more than looks — it's about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.",
      technologies: [
        "NextJs, TailwindCSS, GSAP, Framer Motion",
        "Figma to Code",
        "HTML, CSS, JavaScript"
      ]
    },
    {
      id: 3,
      title: "Optimization",
      description: "Beyond handling data, I'm driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.",
      technologies: [
        "Auto-scaling Architecture, Caching Strategies (Redis), CDN Optimization",
        "Microservices, CI/CD Pipelines, Infrastructure as Code (Terraform)",
        "Data Structures & Algorithms, System Design, Database Optimization, Monitoring"
      ]
    }
  ], []);

  // Optimized animation variants for better performance
  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -15 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.35,
        delay: prefersReducedMotion ? 0 : 0.5 + index * 0.06,
        ease: [0.4, 0, 0.2, 1] as const
      }
    })
  };

  // Optimized header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.4,
        delay: prefersReducedMotion ? 0 : 0.1,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section id="Philosophy" className="relative">
      <div className="relative md:min-h-[300vh]">
        {/* Sticky container that holds all cards */}
        <div className="md:sticky top-0 min-h-screen w-full overflow-hidden">
          <section className="section-padding rounded-t-3xl bg-[var(--color-secondary-400)] text-[var(--color-text-bg)] min-h-screen flex flex-col">
            <div className="relative flex w-full flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)] pb-12 md:pb-20">
              {/* Header */}
              <motion.h1 
                initial="hidden"
                whileInView="visible"
                variants={headerVariants}
                viewport={{ once: true, margin: "-50px" }}
                className="section-heading col-span-6 max-w-[18ch] text-accent-400 text-[2.5rem] sm:text-[length:var(--text-h1-alt)]"
              >
                Approach
              </motion.h1>

              {/* Description Section */}
              <div className="flex grid-cols-12 gap-x-[var(--gap-fluid)] md:grid">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  variants={descriptionVariants}
                  viewport={{ once: true, margin: "-50px" }}
                  className="col-span-7 flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-xs)] sm:flex-row md:col-start-6"
                >
                  <motion.div 
                    className="w-full max-w-[50ch] text-balance text-[1rem] sm:text-[length:var(--text-heading-4)] font-medium leading-[1.5] text-[var(--color-secondary-50)]"
                    initial="hidden"
                    whileInView="visible"
                    variants={descriptionVariants}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    I build products from concept to deployment across React, Next.js, Python, and Go. My focus is on essential functionality over complexity—ship what matters, remove what doesn&apos;t.
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Sticky Scrolling Cards */}
            <div className="flex-1 relative">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  variants={cardVariants}
                  viewport={{ once: false, margin: "-20px" }}
                  className="md:service-card-sticky border-t border-t-[rgba(168,164,160,0.2)] bg-[var(--color-secondary-400)] rounded-2xl md:rounded-3xl p-6 md:p-8 mb-6 md:mb-0"
                  style={{ 
                    top: `calc(20vh + ${index * 80}px)`,
                    zIndex: services.length - index,
                    willChange: 'transform, opacity',
                    transform: 'translate3d(0, 0, 0)',
                  }}
                >
                  {/* Card Header */}
                  <div className="flex items-start gap-6 md:gap-8 mb-6 md:mb-8">
                    <span className="text-2xl md:text-4xl font-bold text-[var(--color-secondary-50)]">
                      ({String(service.id).padStart(2, '0')})
                    </span>
                    <h2 className="text-2xl md:text-5xl font-bold text-[var(--color-accent-400)] leading-tight">
                      {service.title}
                    </h2>
                  </div>

                  {/* Card Content */}
                  <div className="md:pl-[calc(2.5rem+2rem)] space-y-6">
                    <p className="max-w-[60ch] text-base md:text-xl leading-relaxed text-[var(--color-secondary-50)]">
                      {service.description}
                    </p>

                    {/* Technologies List */}
                    <div className="space-y-4 pt-4">
                      {service.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial="hidden"
                          whileInView="visible"
                          custom={techIndex}
                          variants={techVariants}
                          viewport={{ once: true, margin: "-50px" }}
                          className="flex items-start gap-4 border-t border-t-[rgba(168,164,160,0.15)] pt-3"
                        >
                          <span className="font-mono text-xs md:text-sm text-[var(--color-secondary-75)] mt-1">
                            {String(techIndex + 1).padStart(2, '0')}
                          </span>
                          <span className="text-sm md:text-lg font-semibold text-[var(--color-accent-500)] leading-snug">
                            {tech}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};