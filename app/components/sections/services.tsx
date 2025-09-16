// components/sections/Services.tsx
'use client';
import { motion } from 'motion/react';

export const Services = () => {
  const services = [
    {
      id: 1,
      title: "Full-Stack Development",
      description: "Building complete web solutions from frontend to backend.",
      technologies: ["React", "Node.js", "Express.js", "REST APIs", "Firebase", "Docker"]
    },
    {
      id: 2,
      title: "UI/UX & Frontend",
      description: "Designing and developing clean, responsive interfaces.",
      technologies: ["NextJs", "TailwindCSS", "GSAP", "Figma to Code", "HTML", "CSS", "JavaScript"]
    },
    {
      id: 3,
      title: "Optimization",
      description: "Performance optimization and scalability solutions.",
      technologies: ["Data Structures & Algorithms", "DBMS", "OOP", "Data Pipelines", "ETL"]
    }
  ];
  
  return (
    <section id="services" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-20">
          What I Do /
        </h2>
        
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="sticky top-20 border-t border-gray-700 py-20"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-2">
                  <span className="text-2xl font-bold text-gray-400">
                    ({String(service.id).padStart(2, '0')})
                  </span>
                </div>
                <div className="col-span-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-8">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-4">
                        <span className="text-sm font-mono text-gray-400 w-8">
                          {String(techIndex + 1).padStart(2, '0')}
                        </span>
                        <span className="font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};