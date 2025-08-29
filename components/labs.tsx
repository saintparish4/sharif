"use client";

import { motion } from "motion/react";

const Labs = () => {
  const labsProjects = [
    {
      title:
        "NutriTrack AI: AI-Powered Nutrition Tracking and Reducing Food Waste",
      description:
        "A modern React Native app for tracking nutrition and reducing food waste through AI-powered receipt scanning.",
      tech: [
        "React Native",
        "Expo",
        "Tamagui",
        "Zustand",
        "TensorFlow",
        "Supabase",
      ],
      status: "Prototype",
    },
    {
      title: "Real-time Collaboration Platform",
      description:
        "WebRTC-based collaborative coding environment with live preview",
      tech: ["WebRTC", "Socket.io", "Node.js", "TypeScript"],
      status: "Prototype",
    },
    {
      title: "Smart Portfolio Analytics",
      description:
        "Advanced analytics dashboard for tracking portfolio performance and user engagement",
      tech: ["Next.js", "PostgreSQL", "D3.js", "Redis"],
      status: "Planning",
    },
  ];

  return (
    <section id="labs" className="section bg-stone-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="headline-2 mb-4">Labs</h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            Where I explore the full spectrum of digital creation—developing
            mobile apps, testing application concepts, building web experiences,
            tinkering with infrastructure tools, and pursuing the personal
            projects that spark my imagination.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {labsProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-stone-900/50 border border-stone-800 rounded-xl p-6 hover:border-stone-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="title-1 text-stone-100">{project.title}</h3>
                <span className="text-xs px-2 py-1 bg-stone-800 text-stone-300 rounded-full">
                  {project.status}
                </span>
              </div>
              <p className="text-stone-400 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 py-1 bg-stone-800 text-stone-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-stone-500 text-sm">
            More experimental projects coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Labs;
