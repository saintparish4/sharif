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
        "Node.js, Express, Python, Go, Ruby on Rails, Rust",
        "PostgreSQL, Redis, AWS, Docker"
      ]
    },
    {
      id: 2,
      title: "UI/UX & Frontend",
      description: "Design meets function. I create interfaces that are intuitivem accessible, and responsive - where clarity drives every interaction.",
      technologies: [
        "Next.js, TailwindCSS, GSAP, Framer Motion",
        "Figma to Code, Responsive Design",
        "HTML, CSS, JavaScript"
      ]
    },
    {
      id: 3,
      title: "Performance & Infrastructure",
      description: "I design systems built for scale. From caching strategies to cloud architecture, I optimize for performance, reliability, and maintainability.",
      technologies: [
        "Auto-scaling, Caching (Redis), CDN optimization",
        "AWS, GCP, Docker, Terraform, CI/CD pipelines",
        "System Design, DSA, Database Optimization, Monitoring (Datadog)"
      ]
    }
  ], []);

  // Enhanced animation variants with smoother transitions
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
        staggerChildren: 0.1
      }
    }
  };

  const techVariants = {
    hidden: { 
      opacity: 0,
      x: -20,
      scale: 0.9
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.4,
        delay: prefersReducedMotion ? 0 : 0.2 + index * 0.05,
        ease: [0.4, 0, 0.2, 1] as const
      }
    })
  };

  // Enhanced header animation with slide effect
  const headerVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.7,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      x: -10
    },
    visible: { 
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        delay: prefersReducedMotion ? 0 : 0.2,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  // New variants for card elements
  const cardHeaderVariants = {
    hidden: { 
      opacity: 0,
      y: 15
    },
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

  const cardContentVariants = {
    hidden: { 
      opacity: 0,
      y: 10
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.4,
        delay: prefersReducedMotion ? 0 : 0.2,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section id="Philosophy" className="relative">
      <div className="relative">
        <section className="section-padding rounded-t-3xl bg-[var(--color-secondary-400)] text-[var(--color-text-bg)] flex flex-col">
          <div className="relative flex w-full flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)] pb-12 md:pb-20">
            {/* Header */}
            <motion.h1 
              initial="hidden"
              whileInView="visible"
              variants={headerVariants}
              viewport={{ once: true, amount: 0.3 }}
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
                viewport={{ once: true, amount: 0.3 }}
                className="col-span-7 flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-xs)] sm:flex-row md:col-start-6"
              >
                <div 
                  className="w-full max-w-[50ch] text-balance text-[1rem] sm:text-[length:var(--text-heading-4)] font-medium leading-[1.5] text-[var(--color-secondary-50)]"
                >
                 I work from constraints, not possibilities. What&apos;s the actual problem? What&apos;s the fastest way to validate the solution? Build what matters, ship it, and prove it works before building more.
                </div>
              </motion.div>
            </div>
          </div>

          {/* Service Cards - Simple Stacked Layout */}
          <div className="flex flex-col gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true, amount: 0.2 }}
                className={`bg-[var(--color-secondary-400)] rounded-2xl md:rounded-3xl p-6 md:p-8 ${index > 0 ? 'border-t border-t-[rgba(168,164,160,0.2)]' : ''}`}
              >
                  {/* Card Header */}
                  <motion.div 
                    variants={cardHeaderVariants}
                    className="flex items-start gap-6 md:gap-8 mb-6 md:mb-8"
                  >
                    <motion.span 
                      className="text-2xl md:text-4xl font-bold text-[var(--color-secondary-50)]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      ({String(service.id).padStart(2, '0')})
                    </motion.span>
                    <h2 className="text-2xl md:text-5xl font-bold text-[var(--color-accent-400)] leading-tight">
                      {service.title}
                    </h2>
                  </motion.div>

                  {/* Card Content */}
                  <motion.div 
                    variants={cardContentVariants}
                    className="md:pl-[calc(2.5rem+2rem)] space-y-6"
                  >
                    <motion.p 
                      className="max-w-[60ch] text-base md:text-xl leading-relaxed text-[var(--color-secondary-50)]"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Technologies List */}
                    <div className="space-y-4 pt-4">
                      {service.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial="hidden"
                          whileInView="visible"
                          custom={techIndex}
                          variants={techVariants}
                          viewport={{ once: true, amount: 0.5 }}
                          className="flex items-start gap-4 border-t border-t-[rgba(168,164,160,0.15)] pt-3"
                          whileHover={{ 
                            x: 8,
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <motion.span 
                            className="font-mono text-xs md:text-sm text-[var(--color-secondary-75)] mt-1"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {String(techIndex + 1).padStart(2, '0')}
                          </motion.span>
                          <span className="text-sm md:text-lg font-semibold text-[var(--color-accent-500)] leading-snug">
                            {tech}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};