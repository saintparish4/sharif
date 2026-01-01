'use client';
import { motion, useReducedMotion } from 'motion/react';
import { useMemo } from 'react';

export const Services = () => {
  const prefersReducedMotion = useReducedMotion();
  
  // Memoize services data to prevent recreation on every render
  const services = useMemo(() => [
    {
      id: 1,
      title: "Development",
      description: "End-to-end application development from concept to deployment. I architect and build complete web and mobile applications—frontend interfaces, backend APIs, and everything in between—using modern, production-ready stacks.",
      technologies: [
        "React, React Native, Next.js, TypeScript",
        "Node.js, Python, Ruby, Go, Rust, GraphQL",
        "PostgreSQL, MongoDB, Redis, Prisma"
      ]
    },
    {
      id: 2,
      title: "Design",
      description: "User-centered design that bridges aesthetics and usability. I craft intuitive interfaces through research, prototyping, and design systems—ensuring every pixel serves a purpose.",
      technologies: [
        "Figma, Framer, Adobe Creative Suite",
        "Design Systems, Component Libraries, Prototyping",
        "User Research, Accessibility (WCAG), Motion Design"
      ]
    },
    {
      id: 3,
      title: "Infrastructure",
      description: "Scalable systems engineered for reliability. From cloud architecture to CI/CD pipelines, I build the foundation that keeps applications fast, secure, and always available.",
      technologies: [
        "AWS, GCP, Docker, Kubernetes",
        "Terraform, GitHub Actions, CI/CD Pipelines",
        "Monitoring (Datadog), CDN, Auto-scaling, Caching"
      ]
    },
    {
      id: 4,
      title: "Web3 & Blockchain",
      description: "Decentralized applications and smart contract development with security-first principles. From token standards to DeFi protocols, I build on-chain solutions that are auditable, gas-efficient, and battle-tested.",
      technologies: [
        "Solidity, Rust, EVM Chains (Ethereum, Base)",
        "Smart Contract Security, Static Analysis, Auditing",
        "Ethers.js, Foundry, The Graph"
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

  // Header animation variants
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

  // Variants for card elements
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
          <div className="relative flex w-full flex-col gap-y-[var(--space-md)] md:gap-y-[var(--space-lg)] pb-8 md:pb-16">
            {/* Header */}
            <motion.h1 
              initial="hidden"
              whileInView="visible"
              variants={headerVariants}
              viewport={{ once: true, amount: 0.3 }}
              className="section-heading col-span-6 max-w-[18ch] text-[var(--color-accent-400)] text-[2rem] sm:text-[2.25rem] md:text-[length:var(--text-h1-alt)]"
            >
              Services
            </motion.h1>
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
                    className="flex items-center gap-6 md:gap-8 mb-6 md:mb-8"
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
                      className="max-w-[60ch] text-sm sm:text-base md:text-lg leading-relaxed text-[var(--color-secondary-50)]"
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