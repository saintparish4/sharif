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
    <section id="skills" ref={skillsRef} className="min-h-screen py-20 bg-gray-900 text-white">
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
              <TextReveal text="Skills & Technologies" delay={0.2} />
            </h2>
            <div className="w-24 h-1 bg-white"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Skill Categories */}
            <div className="space-y-12">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold mb-6 text-gray-300">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-4">
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
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-gray-400 text-sm">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
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
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold text-gray-300">
                Technology Stack
              </h3>
              
              <div className="flex flex-wrap gap-3">
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
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700 hover:border-gray-500 transition-all duration-300 cursor-default"
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
                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
              >
                <h4 className="text-lg font-semibold mb-4">What I Bring</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Full-stack development expertise</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Modern UI/UX design principles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Scalable architecture design</span>
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
