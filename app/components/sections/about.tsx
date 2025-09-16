'use client';
import { motion } from 'motion/react';
import { useScrollTrigger } from '../../../hooks/useScrollTrigger';
import { TextReveal } from '../animations/TextReveal';

export const About = () => {
  const aboutRef = useScrollTrigger('#about', {
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0, duration: 1.2 }
  });

  const timeline = [
    {
      year: '2024',
      title: 'Senior Full-Stack Developer',
      company: 'Current Focus',
      description: 'Building scalable web applications and leading development teams.'
    },
    {
      year: '2023',
      title: 'Full-Stack Developer',
      company: 'Previous Role',
      description: 'Developed enterprise applications using modern tech stacks.'
    },
    {
      year: '2022',
      title: 'Frontend Developer',
      company: 'Early Career',
      description: 'Started journey in web development with React and modern frameworks.'
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="min-h-[30vh] section-padding bg-[var(--color-secondary-50)]">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-[var(--space-2xl)]"
          >
            <h2 className="section-heading text-[var(--color-secondary-400)] mb-[var(--space-xs)]">
              <TextReveal text="About Me" delay={0.2} />
            </h2>
            <div className="w-[var(--space-lg)] h-[2px] bg-[var(--color-secondary-400)]"></div>
          </motion.div>

          <div className="custom-grid gap-y-[var(--space-xl)]">
            {/* Personal Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-6 space-y-[var(--space-sm)]"
            >
              <h3 className="text-[length:var(--text-heading-3)] font-[600] mb-[var(--space-sm)] text-[var(--color-secondary-400)]">
                My Story
              </h3>
              <p className="text-[var(--color-secondary-100)] leading-base text-[length:var(--text-base)]">
                I'm a passionate full-stack developer with a love for creating 
                beautiful, functional digital experiences. My journey began with 
                a curiosity about how things work on the web, and has evolved into 
                a career focused on building scalable, user-centric applications.
              </p>
              <p className="text-[var(--color-secondary-100)] leading-base text-[length:var(--text-base)]">
                I believe in the power of clean code, thoughtful design, and 
                continuous learning. When I'm not coding, you'll find me exploring 
                new technologies, contributing to open source, or sharing knowledge 
                with the developer community.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-[var(--space-md)] pt-[var(--space-lg)]">
                {[
                  { number: '50+', label: 'Projects Completed' },
                  { number: '3+', label: 'Years Experience' },
                  { number: '20+', label: 'Technologies' },
                  { number: '100%', label: 'Client Satisfaction' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-[length:var(--text-heading-3)] font-[700] text-[var(--color-secondary-400)] mb-[var(--space-3xs)]">
                      {stat.number}
                    </div>
                    <div className="text-[length:var(--text-mono)] text-[var(--color-secondary-200)] font-montrealMono uppercase tracking-[var(--tracking-mono)]">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-6 space-y-[var(--space-md)]"
            >
              <h3 className="text-[length:var(--text-heading-3)] font-[600] mb-[var(--space-md)] text-[var(--color-secondary-400)]">
                Experience Timeline
              </h3>
              
              <div className="space-y-[var(--space-md)]">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-[var(--space-md)] border-l-[2px] border-[var(--color-secondary-300)] last:border-l-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 transform -translate-x-1/2">
                      <div className="w-4 h-4 bg-[var(--color-secondary-400)] rounded-full"></div>
                    </div>
                    
                    <div className="pb-[var(--space-md)]">
                      <div className="text-[length:var(--text-mono)] font-montrealMono text-[var(--color-secondary-200)] mb-[var(--space-3xs)] uppercase tracking-[var(--tracking-mono)]">
                        {item.year}
                      </div>
                      <h4 className="text-[length:var(--text-heading-4)] font-[600] mb-[var(--space-3xs)] text-[var(--color-secondary-400)]">
                        {item.title}
                      </h4>
                      <div className="text-[var(--color-secondary-100)] mb-[var(--space-2xs)] text-[length:var(--text-base)]">
                        {item.company}
                      </div>
                      <p className="text-[var(--color-secondary-100)] text-[length:var(--text-base-small)] leading-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};