'use client';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useScrollTrigger } from '../../../hooks/useScrollTrigger';
import { useProjectCardAnimation } from '../animations/ScrollAnimations';
import { TextReveal } from '../animations/TextReveal';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'FinLink',
    category: 'Web Application',
    description: 'A comprehensive financial management platform built with Next.js and Node.js.',
    image: '/projects/finlink.png',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: 'https://github.com/saintparish4',
    year: '2024'
  },
  {
    id: 2,
    title: 'AlphaCap',
    category: 'Investment Platform',
    description: 'Modern investment tracking and portfolio management application.',
    image: '/projects/alphacap.png',
    technologies: ['React', 'Express.js', 'MongoDB', 'Chart.js', 'JWT'],
    link: 'https://github.com/saintparish4',
    year: '2024'
  },
  {
    id: 3,
    title: 'BridgeBank',
    category: 'Banking Solution',
    description: 'Digital banking interface with modern UX and secure transactions.',
    image: '/projects/bridgebank.png',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    link: 'https://github.com/saintparish4',
    year: '2023'
  },
  {
    id: 4,
    title: 'Swipr',
    category: 'Mobile App',
    description: 'Social networking application with real-time messaging.',
    image: '/projects/swipr.png',
    technologies: ['React Native', 'Firebase', 'TypeScript', 'Socket.io'],
    link: 'https://github.com/saintparish4',
    year: '2023'
  },
  {
    id: 5,
    title: 'Kynd',
    category: 'E-commerce',
    description: 'Modern e-commerce platform with advanced product management.',
    image: '/projects/kynd.png',
    technologies: ['Next.js', 'Shopify API', 'TailwindCSS', 'Stripe'],
    link: 'https://github.com/saintparish4',
    year: '2023'
  },
  {
    id: 6,
    title: 'Flow',
    category: 'Productivity',
    description: 'Task management and workflow optimization tool.',
    image: '/projects/flow.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    link: 'https://github.com/saintparish4',
    year: '2022'
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const projectsRef = useScrollTrigger('#projects', {
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0, duration: 1.2 }
  });

  return (
    <section id="projects" ref={projectsRef} className="min-h-screen section-padding bg-[var(--color-accent-200)]">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-[var(--space-2xl)]"
          >
            <h2 className="section-heading text-[var(--color-secondary-400)] mb-[var(--space-xs)]">
              <TextReveal text="Selected Works" delay={0.2} />
            </h2>
            <div className="w-[var(--space-lg)] h-[2px] bg-[var(--color-secondary-400)]"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)] md:gap-[var(--space-lg)]">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer project-card"
                onMouseEnter={() => setSelectedProject(project.id)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                {/* Project Card */}
                <div className="relative overflow-hidden bg-[var(--color-accent-400)] rounded-xl aspect-[4/3] mb-[var(--space-sm)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-[var(--color-secondary-400)]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[var(--color-secondary-50)] text-[var(--color-secondary-400)] px-[var(--space-sm)] py-[var(--space-2xs)] rounded-full font-[600] hover:bg-[var(--color-accent-200)] transition-colors custom-cursor-area text-[length:var(--text-base-small)]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                    </motion.a>
                  </motion.div>

                  {/* Year Badge */}
                  <div className="absolute top-[var(--space-xs)] right-[var(--space-xs)] bg-[var(--color-secondary-50)]/90 backdrop-blur-xl px-[var(--space-2xs)] py-[var(--space-3xs)] rounded-full text-[length:var(--text-mono)] font-montrealMono tracking-[var(--tracking-mono)] text-[var(--color-secondary-400)]">
                    {project.year}
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-[var(--space-2xs)]">
                  <div className="flex justify-between items-start">
                    <h3 className="text-[length:var(--text-heading-4)] font-[600] group-hover:text-[var(--color-secondary-100)] transition-colors text-[var(--color-secondary-400)]">
                      {project.title}
                    </h3>
                    <span className="text-[length:var(--text-mono)] text-[var(--color-secondary-200)] font-montrealMono uppercase tracking-[var(--tracking-mono)]">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-[var(--color-secondary-100)] text-[length:var(--text-base-small)] leading-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-[var(--space-3xs)]">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="tag text-[var(--color-secondary-200)] border-[var(--color-secondary-200)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[length:var(--text-mono)] text-[var(--color-secondary-200)] font-montrealMono">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-[var(--space-2xl)]"
          >
            <motion.a
              href="https://github.com/saintparish4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[var(--space-2xs)] px-[var(--space-md)] py-[var(--space-xs)] bg-[var(--color-secondary-400)] text-[var(--color-secondary-50)] rounded-full hover:bg-[var(--color-secondary-300)] transition-colors custom-cursor-area text-[length:var(--text-base-small)] font-[500]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Projects</span>
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M14 3h7v7m0-7L10 14" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};