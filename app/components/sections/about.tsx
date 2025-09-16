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
    <section id="about" ref={aboutRef} className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <TextReveal text="About Me" delay={0.2} />
            </h2>
            <div className="w-24 h-1 bg-black"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Personal Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-6">My Story</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer with a love for creating 
                beautiful, functional digital experiences. My journey began with 
                a curiosity about how things work on the web, and has evolved into 
                a career focused on building scalable, user-centric applications.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I believe in the power of clean code, thoughtful design, and 
                continuous learning. When I'm not coding, you'll find me exploring 
                new technologies, contributing to open source, or sharing knowledge 
                with the developer community.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8">
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
                    <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
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
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold mb-8">Experience Timeline</h3>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-gray-200 last:border-l-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 transform -translate-x-1/2">
                      <div className="w-4 h-4 bg-black rounded-full"></div>
                    </div>
                    
                    <div className="pb-8">
                      <div className="text-sm font-mono text-gray-500 mb-2">{item.year}</div>
                      <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                      <div className="text-gray-600 mb-3">{item.company}</div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
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
