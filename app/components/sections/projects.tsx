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
    <section id="projects" ref={projectsRef} className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <TextReveal text="Selected Works" delay={0.2} />
            </h2>
            <div className="w-24 h-1 bg-black"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onMouseEnter={() => setSelectedProject(project.id)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                {/* Project Card */}
                <div className="relative overflow-hidden bg-gray-100 rounded-lg aspect-[4/3] mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors custom-cursor-area"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                    </motion.a>
                  </motion.div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-mono">
                    {project.year}
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500">{project.category}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-500">
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
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/saintparish4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors custom-cursor-area"
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
