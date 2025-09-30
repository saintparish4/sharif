'use client';
import { motion } from 'motion/react';
import { TextReveal } from '../animations/TextReveal';

export const About = () => {
  const skills = {
    languages: [
      'Python', 'SQL', 'C++', 'Java', 'Typescript', 
      'JavaScript', 'Git', 'Postman', 'Docker', 'Firebase'
    ],
    frameworks: [
      'React', 'Node.js', 'Express.js', 'Flask', 'Bootstrap',
      'jQuery', 'TailwindCSS', 'Framer Motion', 'GSAP'
    ],
    concepts: [
      'DSA', 'DBMS', 'OOP', 'Operating Systems', 'System Design'
    ]
  };

  return (
    <section id="About" className="mt-[-2vh]">
      <div className="z-[999999] relative">
        <div className="section-padding sm:pb-[10em] pb-[5em] flex flex-col gap-y-[var(--space-lg)] rounded-b-3xl bg-[var(--color-secondary-400)] lg:gap-y-[var(--space-2xl)] md:pt-[15vh]">
          <div className="custom-grid">
            {/* Large Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-heading cs5:text-[length:var(--text-h1-display)] text-[length:var(--text-menu)] relative z-30 flex w-full flex-col col-span-full leading-none text-[var(--color-accent-400)] mix-blend-exclusion lg:col-span-8 lg:col-end-7 mt-[1em] mb-[1em] order-2 md:order-1"
            >
              <span>
                <TextReveal text="DEVELOPER" delay={0.1} />
              </span>
              <span>
                <TextReveal text="DESIGNER" delay={0.2} />
              </span>
              <span>
                <TextReveal text="CREATOR/" delay={0.3} />
              </span>
            </motion.h2>

            {/* Skills Section */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative z-0 lg:col-span-6 col-span-full flex w-full items-center overflow-clip rounded-md md:items-end order-1 md:order-2"
            >
              <section className="self-start md:px-6 py-5 c370:px-3 px-0 bg-[var(--color-secondary-400)] text-[var(--color-accent-400)] w-full">
                <div className="max-w-6xl mx-auto">
                  <h2 className="md:text-[length:var(--text-h1-alt)] text-[length:var(--text-menu)] font-bold mb-8 text-center">
                    Skills
                  </h2>
                  <div className="grid grid-cols-3 md:grid-cols-3 c343:gap-1 gap-0 md:gap-5 md:p-5 c370:p-1 p-0">
                    {/* Languages & Tools */}
                    <div className="c370:p-2 p-0 rounded-2xl shadow-md hover:shadow-lg transition self-start">
                      <h3 className="hidden md:flex text-xl font-semibold mb-4">Languages &amp; Tools</h3>
                      <ul className="space-y-3 md:text-base">
                        {skills.languages.map((skill, index) => (
                          <motion.div 
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex relative items-start gap-2 text-[var(--color-secondary-50)] c343:text-[length:var(--text-base)] text-[length:var(--text-skill)]"
                          >
                            <span className="group relative block h-fit overflow-hidden font-medium select-none">
                              <span className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                                <h1 className="font-mono cursor-default">{skill}</h1>
                              </span>
                              <span aria-hidden="true" className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0">
                                <h1 className="font-mono cursor-default">{skill}</h1>
                              </span>
                            </span>
                          </motion.div>
                        ))}
                      </ul>
                    </div>

                    {/* Frameworks & Libraries */}
                    <div className="c370:p-2 p-0 rounded-2xl shadow-md hover:shadow-lg transition self-start">
                      <h3 className="hidden md:flex text-xl font-semibold mb-4">Frameworks &amp; Libraries</h3>
                      <ul className="space-y-3 md:text-base">
                        {skills.frameworks.map((skill, index) => (
                          <motion.div 
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex relative items-start gap-2 text-[var(--color-secondary-50)] c343:text-[length:var(--text-base)] text-[length:var(--text-skill)]"
                          >
                            <span className="group relative block h-fit overflow-hidden font-medium select-none">
                              <span className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                                <h1 className="font-mono cursor-default">{skill}</h1>
                              </span>
                              <span aria-hidden="true" className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0">
                                <h1 className="font-mono cursor-default">{skill}</h1>
                              </span>
                            </span>
                          </motion.div>
                        ))}
                      </ul>
                    </div>

                    {/* Core CS Concepts */}
                    <div className="c370:p-2 p-0 rounded-2xl shadow-md hover:shadow-lg transition self-start">
                      <h3 className="hidden md:flex text-xl font-semibold mb-4">Core CS Concepts</h3>
                      <ul className="space-y-3 md:text-base">
                        {skills.concepts.map((skill, index) => (
                          <motion.div 
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex relative items-start gap-2 text-[var(--color-secondary-50)] c343:text-[length:var(--text-base)] text-[length:var(--text-skill)]"
                          >
                            <span className="group relative block h-fit overflow-hidden font-medium select-none">
                              <span className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                                <h1 className="font-mono cursor-default">{skill}</h1>
                              </span>
                              <span aria-hidden="true" className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0">
                                <h1 className="font-mono cursor-default">{skill}</h1>
                              </span>
                            </span>
                          </motion.div>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>

          {/* Image and About Text Section */}
          <div className="custom-grid col-span-full gap-y-[var(--space-lg)] lg:gap-y-[var(--space-2xl)]">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="pointer-events-none max-h-[30rem] relative z-0 col-span-3 flex aspect-square w-full items-center overflow-clip rounded-md sm:aspect-auto md:items-end"
            >
              <img 
                alt="Just an Image." 
                width="1536" 
                height="2040" 
                decoding="async" 
                className="h-full w-full object-cover object-center" 
                src="/1.webp"
              />
            </motion.div>

            {/* About Text */}
            <div className="col-span-7 col-start-6 flex flex-col gap-y-[var(--space-xl)] lg:gap-y-[var(--space-2xl)]">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-full max-w-[39ch] text-balance text-[length:var(--text-heading-4)] font-medium leading-snug text-[var(--color-accent-400)]"
              >
                <TextReveal 
                  text="I'm a software engineer driven by a passion for turning ideas into clean, intuitive digital experiences." 
                  delay={0.2} 
                />
              </motion.div>

              <div className="flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-sm)] lg:flex-row">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex h-fit overflow-clip font-mono tracking-[var(--tracking-mono)]"
                >
                  <span className="flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-50)]">
                    <TextReveal text="(About Me)" delay={0.4} />
                  </span>
                </motion.span>

                <div className="flex w-full gap-y-4 max-w-[38ch] flex-col text-balance text-[length:var(--text-base)] font-medium leading-base text-[var(--color-secondary-50)]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <TextReveal 
                      text="I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and Tailwind CSS. My journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences." 
                      delay={0.5}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <TextReveal 
                      text="Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions. I aim to contribute to impactful projects that make a difference in users' lives." 
                      delay={0.7}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};