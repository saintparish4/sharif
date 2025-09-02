"use client";
import { motion } from "motion/react";
import Link from "next/link";

const ALL_LABS = [
     {
    name: "Project Name",
    description: "Project description goes here",
    technologies: ["Technology 1", "Technology 2", "Technology 3"],
    github: "https://github.com/username/project",
    link: "https://project-url.com",
    category: "Category",
    status: "Status"
  },
];

export default function AllLabs() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 px-4 sm:px-12 py-8 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="mb-12">
      <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm mb-6 relative group"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span className="relative text-base font-mono font-semibold">
              Back to Home
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-current"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </span>
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-4">Lab Projects</h1>
          <p className="text-lg text-muted-foreground font-mono max-w-2xl">
            Experimental projects and cutting-edge research initiatives. These are innovative solutions 
            that explore emerging technologies and push the boundaries of what&apos;s possible in software development.
          </p>
        </motion.div>
      </header>

      {/* Lab Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ALL_LABS.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-gradient-to-br from-background/80 to-background/60 border border-dashed rounded-xl p-6 hover:from-background/90 hover:to-background/80 transition-all duration-500 hover:border-foreground/50 hover:shadow-lg hover:shadow-foreground/5 backdrop-blur-sm"
          >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-transparent group-hover:via-foreground/[0.02] group-hover:to-transparent rounded-xl transition-all duration-500 pointer-events-none" />
            
            <div className="relative">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg font-mono group-hover:text-foreground transition-colors duration-300">
                      {project.name}
                    </h3>
                    <motion.span 
                      className={`text-xs px-2 py-1 rounded-full font-mono transition-all duration-300 ${
                        project.status === 'Concept' 
                          ? 'bg-gradient-to-r from-[#E8E2FF] to-[#D4E6FF] text-black dark:from-[#E8E2FF]/20 dark:to-[#D4E6FF]/20 dark:text-black border border-[#E8E2FF]/50 dark:border-[#E8E2FF]/30'
                          : project.status === 'Prototype'
                          ? 'bg-gradient-to-r from-[#FFF9C4] to-[#E8F5E8] text-black dark:from-[#FFF9C4]/20 dark:to-[#E8F5E8]/20 dark:text-black border border-[#FFF9C4]/50 dark:border-[#FFF9C4]/30'
                          : project.status === 'Development'
                          ? 'bg-gradient-to-r from-[#E3F2FD] to-[#B2DFDB] text-black dark:from-[#E3F2FD]/20 dark:to-[#B2DFDB]/20 dark:text-black border border-[#E3F2FD]/50 dark:border-[#E3F2FD]/30'
                          : project.status === 'Beta'
                          ? 'bg-gradient-to-r from-[#FCE4EC] to-[#FFCDD2] text-black dark:from-[#FCE4EC]/20 dark:to-[#FFCDD2]/20 dark:text-black border border-[#FCE4EC]/50 dark:border-[#FCE4EC]/30'
                          : project.status === 'Launched'
                          ? 'bg-gradient-to-r from-[#E8F5E8] to-[#C8E6C9] text-black dark:from-[#E8F5E8]/20 dark:to-[#C8E6C9]/20 dark:text-black border border-[#E8F5E8]/50 dark:border-[#E8F5E8]/30'
                          : project.status === 'Live'
                          ? 'bg-gradient-to-r from-[#C8E6C9] to-[#A5D6A7] text-black dark:from-[#C8E6C9]/20 dark:to-[#A5D6A7]/20 dark:text-black border border-[#C8E6C9]/50 dark:border-[#C8E6C9]/30'
                          : project.status === 'Experimental'
                          ? 'bg-gradient-to-r from-[#F3E5F5] to-[#E1BEE7] text-black dark:from-[#F3E5F5]/20 dark:to-[#E1BEE7]/20 dark:text-black border border-[#F3E5F5]/50 dark:border-[#F3E5F5]/30'
                          : 'bg-gradient-to-r from-red-100 to-pink-100 text-black dark:from-red-500/20 dark:to-pink-500/20 dark:text-black border border-red-200 dark:border-red-500/30'
                      }`}
                      whileHover={{ scale: 1.05, y: -1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.status}
                    </motion.span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-mono group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Category */}
                  <span className="text-xs px-2 py-1 bg-muted text-foreground rounded-md border border-border mb-3 inline-block font-mono">
                    {project.category}
                  </span>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <motion.span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gradient-to-r from-muted/80 to-muted/60 text-foreground/90 rounded border border-border/50 backdrop-blur-sm group-hover:from-muted group-hover:to-muted/80 group-hover:border-border transition-all duration-300 font-mono"
                        whileHover={{ scale: 1.05, y: -1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-muted/30 text-muted-foreground rounded border border-border font-mono">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gradient-to-r hover:from-muted/80 hover:to-muted/60 rounded-md transition-all duration-300 border border-transparent hover:border-border/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View GitHub repository"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="transition-transform duration-300 group-hover:rotate-12"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
                
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gradient-to-r hover:from-muted/80 hover:to-muted/60 rounded-md transition-all duration-300 border border-transparent hover:border-border/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, x: 3, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Open project website"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path d="M14 3h7v7m0-7L10 14m-7 7h7v-7" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.footer 
        className="mt-16 pt-8 border-t border-dashed text-center font-mono text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p>More experimental projects in development...</p>
      </motion.footer>
    </div>
  );
} 