'use client';
import { motion } from 'motion/react';
import { TextReveal } from '../animations/TextReveal';

export const Services = () => {
  const services = [
    {
      id: 1,
      title: "Full-Stack Development",
      description: "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
      technologies: [
        "React, Node.js, Express.js",
        "REST APIs, Firebase, Docker",
        "Git, GitHub, Postman"
      ]
    },
    {
      id: 2,
      title: "UI/UX & Frontend",
      description: "Design is more than looks — it's about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.",
      technologies: [
        "NextJs, TailwindCSS, GSAP",
        "Figma to Code",
        "HTML, CSS, JavaScript"
      ]
    },
    {
      id: 3,
      title: "Optimization",
      description: "Beyond handling data, I'm driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.",
      technologies: [
        "Data Structures & Algorithms",
        "DBMS, OOP, OS Fundamentals",
        "Data Pipelines, ETL, and Scalability"
      ]
    }
  ];

  return (
    <section id="Services">
      <div className="relative">
        <div className="relative z-20 min-h-screen w-full overflow-x-clip">
          <section className="section-padding rounded-t-3xl bg-[var(--color-secondary-400)] text-[var(--color-text-bg)]">
            <div className="relative flex w-full flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)]">
              {/* Header */}
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="cs2:text-[length:var(--text-h1)] section-heading col-span-6 max-w-[18ch] text-accent-400"
              >
                <TextReveal text="What I Do /" delay={0.1} />
              </motion.h1>

              {/* Description Section */}
              <div className="flex grid-cols-12 gap-x-[var(--gap-fluid)] md:grid">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="col-span-7 flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-2xs)] sm:flex-row md:col-start-6"
                >
                  <span className="flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-75)] text-[16px]">
                    (Services)
                  </span>
                  <div className="w-full max-w-[35ch] text-balance text-[length:var(--text-base-large)] font-medium leading-base text-[var(--color-secondary-50)]">
                    <TextReveal 
                      text="I specialize in building full-stack web applications that are fast, reliable, and user-friendly. With a solid foundation in both frontend and backend technologies, I help bring ideas to life whether it's for a business, a startup, or a product team." 
                      delay={0.3}
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Sticky Services Cards */}
            <div className="w-full pt-[var(--space-lg)]">
              <div className="mt-12 gap-y-16 flex flex-col justify-between bg-[var(--color-secondary-400)]">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`sticky border-t border-t-[var(--color-secondary-300)] bg-[var(--color-secondary-400)] ${
                      index === 0 ? 'mb-[21.5em] c324:mb-[23em] c343:mb-[23.5em] c358:mb-[25em] c360:mb-[23em] c370:mb-[21em] cs3:mb-[19em] c387:mb-[19.2em] cs5:mb-[18.2em] cs4:mb-[18em] sm:mb-[19em] md:mb-[19em] cs1:mb-[18.5em] lg:mb-[20.1em]' :
                       index === 1 ? 'mb-[15.5em] c343:mb-[17.5em] c358:mb-[16.5em] c360:mb-[15em] c370:mb-[16em] cs3:mb-[13.1em] c387:mb-[13em] cs5:mb-[13em] cs4:mb-[13em] cs2:mb-[13.2em] sm:mb-[13em] md:mb-[13.5em] cs1:mb-[13em] lg:mb-[14em]' :
                       'mb-[7.5em] cs1:mb-[7em] lg:mb-[8em]'
                    }`}
                    style={{ 
                      top: index === 0 ? '20vh' : index === 1 ? 'calc(20vh + 7em)' : 'calc(20vh + 16em)'
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
                        <p className="max-w-[40ch] text-balance text-[length:var(--text-base)] font-medium text-[var(--color-secondary-50)]">
                          {service.description}
                        </p>

                        <div className="flex flex-col divide-y divide-[var(--color-secondary-200)]">
                          {service.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.8 + techIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-x-[var(--space-sm)] py-[var(--space-3xs)] font-bold text-[var(--color-accent-500)] xl:gap-x-[var(--space-md)] xl:py-[var(--space-2xs)] text-[length:var(--text-heading-4)]"
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