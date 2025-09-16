'use client';
import { motion } from 'motion/react';
import { useScrollTrigger } from '../../../hooks/useScrollTrigger';
import { useSkillBarAnimation } from '../animations/ScrollAnimations';
import { TextReveal } from '../animations/TextReveal';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'TailwindCSS', level: 95 },
      { name: 'GSAP/Framer Motion', level: 85 },
      { name: 'Vue.js', level: 80 }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 85 },
      { name: 'Python/FastAPI', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 }
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'Docker', level: 75 },
      { name: 'AWS/Vercel', level: 80 },
      { name: 'Figma', level: 85 },
      { name: 'Firebase', level: 85 }
    ]
  }
];

const technologies = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Node.js', 
  'Express.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis',
  'TailwindCSS', 'GSAP', 'Framer Motion', 'Docker', 'AWS', 'Vercel',
  'Git', 'GitHub', 'Figma', 'Firebase', 'Stripe', 'Socket.io'
];

export const Skills = () => {
  const skillsRef = useScrollTrigger('#skills', {
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0, duration: 1.2 }
  });

  return (
    <section id="skills" ref={skillsRef} className="min-h-screen section-padding bg-[var(--color-secondary-400)]">
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
            <h2 className="section-heading text-[var(--color-secondary-50)] mb-[var(--space-xs)]">
              <TextReveal text="Skills & Technologies" delay={0.2} />
            </h2>
            <div className="w-[var(--space-lg)] h-[2px] bg-[var(--color-secondary-50)]"></div>
          </motion.div>

          <div className="custom-grid gap-y-[var(--space-xl)]">
            {/* Skill Categories */}
            <div className="col-span-12 lg:col-span-6 space-y-[var(--space-lg)]">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-[length:var(--text-heading-3)] font-[600] mb-[var(--space-sm)] text-[var(--color-secondary-75)]">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-[var(--space-xs)]">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 
                        }}
                        viewport={{ once: true }}
                        className="space-y-[var(--space-3xs)] skill-bar"
                        data-progress={skill.level}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-[var(--color-secondary-50)] font-[500] text-[length:var(--text-base)]">
                            {skill.name}
                          </span>
                          <span className="text-[var(--color-secondary-75)] text-[length:var(--text-mono)] font-montrealMono">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-[var(--color-secondary-200)] rounded-full h-[3px]">
                          <motion.div
                            className="bg-gradient-to-r from-[var(--color-accent-600)] to-[var(--color-accent-500)] h-[3px] rounded-full skill-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technology Cloud */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-6 space-y-[var(--space-md)]"
            >
              <h3 className="text-[length:var(--text-heading-3)] font-[600] text-[var(--color-secondary-75)]">
                Technology Stack
              </h3>
              
              <div className="flex flex-wrap gap-[var(--space-2xs)]">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.6 + index * 0.05,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'var(--color-secondary-300)'
                    }}
                    viewport={{ once: true }}
                    className="px-[var(--space-xs)] py-[var(--space-3xs)] bg-[var(--color-secondary-300)] text-[var(--color-secondary-75)] rounded-full text-[length:var(--text-skill)] font-[500] border border-[var(--color-secondary-200)] hover:border-[var(--color-secondary-100)] transition-all duration-300 cursor-default font-montrealMono tracking-[var(--tracking-mono)]"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="bg-[var(--color-secondary-300)] p-[var(--space-sm)] rounded-xl border border-[var(--color-secondary-200)]"
              >
                <h4 className="text-[length:var(--text-heading-4)] font-[600] mb-[var(--space-xs)] text-[var(--color-secondary-50)]">
                  What I Bring
                </h4>
                <ul className="space-y-[var(--space-3xs)] text-[var(--color-secondary-75)]">
                  <li className="flex items-center gap-[var(--space-2xs)]">
                    <div className="w-[6px] h-[6px] bg-[var(--color-accent-600)] rounded-full"></div>
                    <span className="text-[length:var(--text-base-small)]">Full-stack development expertise</span>
                  </li>
                  <li className="flex items-center gap-[var(--space-2xs)]">
                    <div className="w-[6px] h-[6px] bg-[var(--color-accent-500)] rounded-full"></div>
                    <span className="text-[length:var(--text-base-small)]">Modern UI/UX design principles</span>
                  </li>
                  <li className="flex items-center gap-[var(--space-2xs)]">
                    <div className="w-[6px] h-[6px] bg-[var(--color-accent-400)] rounded-full"></div>
                    <span className="text-[length:var(--text-base-small)]">Performance optimization</span>
                  </li>
                  <li className="flex items-center gap-[var(--space-2xs)]">
                    <div className="w-[6px] h-[6px] bg-[var(--color-secondary-100)] rounded-full"></div>
                    <span className="text-[length:var(--text-base-small)]">Scalable architecture design</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};