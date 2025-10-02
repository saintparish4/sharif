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
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -15 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.4,
        delay: prefersReducedMotion ? 0 : 0.6 + index * 0.08,
        ease: [0.25, 0.1, 0.25, 1] as const
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
        duration: prefersReducedMotion ? 0.01 : 0.7,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  const descriptionVariants = {
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
  };

  return (
    <section id="Services">
      <div className="relative">
        <div className="relative z-20 min-h-screen w-full overflow-x-clip">
          <section className="section-padding rounded-t-3xl bg-[var(--color-secondary-400)] text-[var(--color-text-bg)]">
            <div className="relative flex w-full flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)]">
              {/* Header */}
              <motion.h1 
                initial="hidden"
                whileInView="visible"
                variants={headerVariants}
                viewport={{ once: true, margin: "-50px" }}
                className="cs2:text-[length:var(--text-display)] section-heading col-span-6 max-w-[18ch] text-accent-400"
                style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
              >
                Philosophy /
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
                    (Aozora Kōbō) 
                  </span>
                  <motion.div 
                    className="w-full max-w-[50ch] text-balance text-[length:var(--text-heading-4)] font-medium leading-base text-[var(--color-secondary-50)]"
                    initial="hidden"
                    whileInView="visible"
                    variants={descriptionVariants}
                    viewport={{ once: true, margin: "-50px" }}
                    style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
                  >
                     Code should flow like water—adapting to the container, finding the path of least resistance. I&apos;m a software engineer and founder who brings startups from idea to production, working across React, Next.js, Python, Rust, Go, and more. My studio operates on a principle of 无为 (wu wei): the right action at the right time, without force. I focus on what&apos;s essential, remove what&apos;s not, and ship products that feel inevitable rather than complicated.
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Sticky Services Cards */}
            <div className="w-full pt-[var(--space-lg)]">
              <div className="mt-12 gap-y-16 flex flex-col justify-between bg-[var(--color-secondary-400)]">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariants}
                    viewport={{ once: true, margin: "-100px" }}
                    className="service-card-sticky border-t border-t-[var(--color-secondary-300)] bg-[var(--color-secondary-400)]"
                    style={{ 
                      top: index === 0 ? '20vh' : 
                           index === 1 ? 'calc(20vh + 7em)' : 
                           'calc(20vh + 16em)',
                      marginBottom: index === 0 ? 'clamp(18em, 20vw, 23em)' :
                                   index === 1 ? 'clamp(13em, 14vw, 16em)' :
                                   'clamp(7em, 8vw, 8.5em)',
                      willChange: 'transform, opacity',
                      contain: 'layout style paint'
                    }}
                  >
                    <div className="flex grid-cols-12 items-center justify-start gap-x-[var(--space-xs)] text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] md:grid md:justify-between md:gap-x-[var(--gap-fluid)]">
                      <span className="col-span-2">({String(service.id).padStart(2, '0')})</span>
                      <h3 className="col-span-8 col-start-6 py-[var(--space-md)] 2xl:py-[var(--space-sm)]">
                        {service.title}
                      </h3>
                    </div>

                    <div className="grid-gap relative flex min-h-[30vh] flex-col place-items-start pt-[var(--space-3xs)] md:grid md:min-h-[40vh] md:grid-cols-12">
                      <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-[var(--space-sm)] pt-[var(--space-sm)] text-[length:var(--text-heading-4)]">
                        <p className="max-w-[55ch] text-balance text-[length:var(--text-base)] font-medium text-[var(--color-secondary-50)]">
                          {service.description}
                        </p>

                        <div className="flex flex-col divide-y divide-[var(--color-secondary-200)]">
                          {service.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial="hidden"
                              whileInView="visible"
                              custom={techIndex}
                              variants={techVariants}
                              viewport={{ once: true, margin: "-50px" }}
                              className="flex items-start gap-x-[var(--space-sm)] py-[var(--space-3xs)] font-bold text-[var(--color-accent-500)] xl:gap-x-[var(--space-md)] xl:py-[var(--space-2xs)] text-[length:var(--text-heading-4)]"
                              style={{ 
                                willChange: prefersReducedMotion ? 'auto' : 'transform',
                                backfaceVisibility: 'hidden',
                                WebkitFontSmoothing: 'subpixel-antialiased'
                              }}
                            >
                              <span className="font-mono text-[length:var(--text-base)] font-medium leading-[200%] text-[var(--color-secondary-75)]">
                                {String(techIndex + 1).padStart(2, '0')}
                              </span>
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};