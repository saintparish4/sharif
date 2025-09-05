"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const MOTTO_LIST = [
  "Build. Learn. Repeat.",
  "Code with purpose, design with soul",
  "Progress over perfection",
  "Think deeply, build boldly, ship fearlessly",
  "Every pixel has a purpose",
  "Solve problems that matter",
  "Craft experiences, not just code",
  "Build bridges, not walls",
  "Question assumptions, not intentions",
  "Make it work, make it sing",
  "Debug your thinking first",
  "Be the user you're building for",
  "Turn constraints into creativity",
] as const;

const PROJECTS = [
  {
    name: "ART-Protocol",
    description:
      "Yield farming ecosystem that introduces Dynamic Yield Amplification (DYA) and comprehensive Impermanent Loss Protection.",
    technologies: [
      "Solidity",
      "TypeScript",
      "Hardhat",
      "Layer 2 Solutions",
      "OpenZeppelin",
      "Next.js",
      "Express.js",
    ],
    github: "https://github.com/saintparish4/art-protocol",
    link: "https://github.com/saintparish4/art-protocol",
    status: "Development",
  },
  {
    name: "Monarch",
    description:
      "A comprehensive collection of production-ready smart contract libraries designed for Base applications, leveraging L2 advantages for consumer-focused dApps. Note: This is an independent, community-driven open source project and is not affiliated with or endorsed by Base or Coinbase.",
    technologies: [
      "Solidity",
      "Base Ecosystem",
      "Layer 2 Solutions",
      "Open-Source",
      "Web3",
      "TypeScript",
    ],
    github: "https://github.com/saintparish4/monarch",
    link: "https://github.com/saintparish4/monarch",
    status: "Development",
  },
  {
    name: "Dawn",
    description:
      "Enable small businesses to accept cryptocurrency payments with dramatically reduced processing fees while maintaining a simple, familiar user experience.",
    technologies: [
      "Express.js",
      "Joi",
      "Winston",
      "PostgreSQL",
      "Ethers.js",
      "Next.js PWA",
      "Zustand",
      "Wagmi",
    ],
    github: "https://github.com/saintparish4/dawn",
    link: "https://github.com/saintparish4/dawn",
    status: "Development",
  },
  {
    name: "Chroma: Global Payout Platform",
    description:
      "A global payout platform that enables freelancers, creators, and remote workers to receive USD, convert to stablecoins, and withdraw to local currency in minutes.",
    technologies: ["React Native", "Expo"],
    github: "https://github.com/saintparish4/chroma",
    link: "https://github.com/saintparish4/chroma",
    status: "Concept",
  },
];

const SOCIALS = [
  {
    name: "Github",
    url: "https://github.com/saintparish4",
    icon: "https://placeholder.com/github-logo.svg",
  },
  {
    name: "Threads",
    url: "https://www.threads.com/@senpaiisaint",
    icon: "https://placeholder.com/threads.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sharifparish/",
    icon: "https://placeholder.com/linkedin-logo.svg",
  },
];

const labsProjects = [
  {
    title: "OneLife AI: AI-Powered Personalized Health and Wellness",
    description:
      "OneLife simplifies the path to long-term healthy eating, and our technology motivates users to live a more balanced lifestyle with personalized plans for better and healthier eating.",
    tech: ["X", "X", "X", "X", "X", "X"],
    status: "Concept",
    github: "https://github.com/saintparish4/onelife-ai",
    link: "https://github.com/saintparish4/onelife-ai",
  },
  {
    title: "FIREBORN: Treasury Management Platform for DeFi Yield Strategies",
    description:
      "FIREBORN is a treasury management platform that provides sophisticated DeFi yield strategies to DAOs, corporate treasuries, and family offices.",
    tech: ["X", "X", "X", "X", "X", "X", "X"],
    status: "Concept",
    github: "https://github.com/saintparish4/fireborn-treasury",
    link: "https://github.com/saintparish4/fireborn-treasury",
  },
  {
    title: "OCTA: Geospatial Network Analysis Platform",
    description:
      "A full-stack geospatial analysis application that combines network relationship mapping with location-based intelligence to uncover patterns in publicly available datasets.",
    tech: ["X", "X", "X", "X"],
    status: "Concept",
    github: "https://github.com/saintparish4/octa",
    link: "https://github.com/saintparish4/octa",
  },
  {
    title: "Fūma: Analysis & Design Project Management Tool",
    description:
      "Fūma is a web-based tool for managing analysis and design projects. It allows users to create, edit, and track projects, tasks, and resources. Includes features like project management, task tracking, resource allocation, and progress tracking.",
    tech: ["X", "X", "X"],
    status: "Concept",
    github: "https://github.com/saintparish4/fuma",
    link: "https://github.com/saintparish4/fuma",
    // link: "https://github.com/saintparish4/excaliburs-firewall",
  },
  {
    title: "Sai Labs: Future of Language AI",
    description:
      "Sai Labs is empowering every developer and enterprise to build amazing products and capture true business value with language AI.",
    tech: ["X", "X", "X"],
    status: "Concept",
    github: "https://github.com/saintparish4/sai-labs",
    link: "https://github.com/saintparish4/sai-labs",
  },
  {
    title: "SigmaX: Growth Engine",
    description:
      "SigmaX is building growth engines that blend AI workflows with experts. From content to distribution to conversion.",
    tech: ["X", "X", "X"],
    status: "Concept",
    github: "https://github.com/saintparish4/sigma",
    link: "https://github.com/saintparish4/sigma",
  },
];

export default function Home() {
  const [mottoIdx, setMottoIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMottoIdx((idx) => (idx + 1) % MOTTO_LIST.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 px-4 sm:px-12 py-8 font-[family-name:var(--font-geist-sans)]">
      {/* Header/Nav */}
      <header className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          {/* Removed old dark mode toggle button */}
        </div>
      </header>

      {/* Hero/Bio */}
      <section className="mb-16">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          style={{
            fontFamily: "TrenchSlab, Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            letterSpacing: "0.04em",
            lineHeight: 1.1,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="seamless-gradient-text">
            {"Sharif"}
            <span style={{ margin: "0 0.08em" }}>&nbsp;</span>
            {"Parish"}
          </span>
        </motion.h1>

        <motion.p
          className="text-lg mb-2 font-mono text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          The Art of Software Design: Software that moves in harmony with the
          Human Mind.
        </motion.p>

        <motion.p
          className="text-lg max-w-2xl font-mono text-muted-foreground font-normal leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          I&apos;m a Full-stack engineer who thinks in TypeScript, dreams in
          distributed systems, and believes technology should amplify human
          potential. I live at the intersection of web performance, blockchain
          innovation, and AI intelligence — crafting React apps that enrich life,
          smart contracts that secure, and ML systems that clarify. Every
          optimization tells a story, every commit moves us toward technology
          that feels less like technology.
        </motion.p>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-2">
          Projects
        </h2>
        <p className="mb-6 font-mono">
          Projects I&apos;ve built to solve problems.
        </p>
        <div className="space-y-6">
          {PROJECTS.map((proj, index) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative border border-dashed rounded-xl p-6 font-mono bg-gradient-to-br from-background/80 to-background/60 hover:from-background/90 hover:to-background/80 transition-all duration-500 hover:border-foreground/50 hover:shadow-lg hover:shadow-foreground/5 backdrop-blur-sm"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-transparent group-hover:via-foreground/[0.02] group-hover:to-transparent rounded-xl transition-all duration-500 pointer-events-none" />

              <div className="relative flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-xl text-foreground group-hover:text-foreground transition-colors duration-300">
                      {proj.name}
                    </h3>
                    <motion.span
                      className={`text-xs px-3 py-1.5 rounded-full font-mono font-semibold transition-all duration-300 ${
                        proj.status === "Concept"
                          ? "bg-gradient-to-r from-[#E8E2FF] to-[#D4E6FF] text-black dark:from-[#E8E2FF]/20 dark:to-[#D4E6FF]/20 dark:text-black border border-[#E8E2FF]/50 dark:border-[#E8E2FF]/30"
                          : proj.status === "Prototype"
                          ? "bg-gradient-to-r from-[#FFF9C4] to-[#E8F5E8] text-black dark:from-[#FFF9C4]/20 dark:to-[#E8F5E8]/20 dark:text-black border border-[#FFF9C4]/50 dark:border-[#FFF9C4]/30"
                          : proj.status === "Development"
                          ? "bg-gradient-to-r from-[#E3F2FD] to-[#B2DFDB] text-black dark:from-[#E3F2FD]/20 dark:to-[#B2DFDB]/20 dark:text-black border border-[#E3F2FD]/50 dark:border-[#E3F2FD]/30"
                          : proj.status === "Beta"
                          ? "bg-gradient-to-r from-[#FCE4EC] to-[#FFCDD2] text-black dark:from-[#FCE4EC]/20 dark:to-[#FFCDD2]/20 dark:text-black border border-[#FCE4EC]/50 dark:border-[#FCE4EC]/30"
                          : proj.status === "Launched"
                          ? "bg-gradient-to-r from-[#E8F5E8] to-[#C8E6C9] text-black dark:from-[#E8F5E8]/20 dark:to-[#C8E6C9]/20 dark:text-black border border-[#E8F5E8]/50 dark:border-[#E8F5E8]/30"
                          : proj.status === "Live"
                          ? "bg-gradient-to-r from-[#C8E6C9] to-[#A5D6A7] text-black dark:from-[#C8E6C9]/20 dark:to-[#A5D6A7]/20 dark:text-black border border-[#C8E6C9]/50 dark:border-[#C8E6C9]/30"
                          : proj.status === "Experimental"
                          ? "bg-gradient-to-r from-[#F3E5F5] to-[#E1BEE7] text-black dark:from-[#F3E5F5]/20 dark:to-[#E1BEE7]/20 dark:text-black border border-[#F3E5F5]/50 dark:border-[#F3E5F5]/30"
                          : "bg-gradient-to-r from-red-100 to-pink-100 text-black dark:from-red-500/20 dark:to-pink-500/20 dark:text-black border border-red-200 dark:border-red-500/30"
                      }`}
                      whileHover={{ scale: 1.05, y: -1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {proj.status}
                    </motion.span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {proj.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="text-xs px-3 py-1.5 bg-gradient-to-r from-muted/80 to-muted/60 text-foreground/90 rounded-lg border border-border/50 backdrop-blur-sm group-hover:from-muted group-hover:to-muted/80 group-hover:border-border transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 ml-4">
                  <motion.a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 hover:bg-gradient-to-r hover:from-muted/80 hover:to-muted/60 rounded-lg transition-all duration-300 border border-transparent hover:border-border/50 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View GitHub repository"
                  >
                    <svg
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="transition-transform duration-300 group-hover:rotate-12"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 hover:bg-gradient-to-r hover:from-muted/80 hover:to-muted/60 rounded-lg transition-all duration-300 border border-transparent hover:border-border/50 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, x: 3, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Open project website"
                  >
                    <svg
                      width="18"
                      height="18"
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

          {/* View All Projects Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center pt-4"
          >
            <motion.a
              href="/all-projects"
              className="group inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 font-mono text-sm border border-dashed rounded-xl px-8 py-4 hover:border-foreground/50 hover:bg-gradient-to-r hover:from-background/80 hover:to-background/60 backdrop-blur-sm hover:shadow-lg hover:shadow-foreground/5"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative">
                View All Projects
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-foreground/50 to-foreground/30 group-hover:w-full transition-all duration-300" />
              </span>
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Labs Section (integrated) */}
      <section
        id="labs"
        className="mb-16 py-16 rounded-xl bg-gradient-to-br from-background/80 to-background/60 border border-dashed backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 font-mono">
              Fragmented Garden
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
              My experimental playground for breaking things on purpose and
              building what probably shouldn&apos;t exist. Testing frameworks,
              optimizing performance patterns, and bridging Web2 and Web3
              through TypeScript utilities and smart contract experiments.
              <br />
              <br />
              Cherry blossoms fall <br />
              In destruction&apos;s gentle wake, <br />
              New code takes its place.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {labsProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-background/80 to-background/60 border border-dashed rounded-xl p-6 hover:from-background/90 hover:to-background/80 transition-all duration-500 hover:border-foreground/50 hover:shadow-lg hover:shadow-foreground/5 backdrop-blur-sm"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-transparent group-hover:via-foreground/[0.02] group-hover:to-transparent rounded-xl transition-all duration-500 pointer-events-none" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold font-mono group-hover:text-foreground transition-colors duration-300 mb-2">
                        {project.title}
                      </h3>
                      <motion.span
                        className={`text-xs px-3 py-1.5 rounded-full font-mono font-semibold transition-all duration-300 ${
                          project.status === "Concept"
                            ? "bg-gradient-to-r from-[#E8E2FF] to-[#D4E6FF] text-black dark:from-[#E8E2FF]/20 dark:to-[#D4E6FF]/20 dark:text-black border border-[#E8E2FF]/50 dark:border-[#E8E2FF]/30"
                            : project.status === "Prototype"
                            ? "bg-gradient-to-r from-[#FFF9C4] to-[#E8F5E8] text-black dark:from-[#FFF9C4]/20 dark:to-[#E8F5E8]/20 dark:text-black border border-[#FFF9C4]/50 dark:border-[#FFF9C4]/30"
                            : project.status === "Development"
                            ? "bg-gradient-to-r from-[#E3F2FD] to-[#B2DFDB] text-black dark:from-[#E3F2FD]/20 dark:to-[#B2DFDB]/20 dark:text-black border border-[#E3F2FD]/50 dark:border-[#E3F2FD]/30"
                            : project.status === "Beta"
                            ? "bg-gradient-to-r from-[#FCE4EC] to-[#FFCDD2] text-black dark:from-[#FCE4EC]/20 dark:to-[#FFCDD2]/20 dark:text-black border border-[#FCE4EC]/50 dark:border-[#FCE4EC]/30"
                            : project.status === "Launched"
                            ? "bg-gradient-to-r from-[#E8F5E8] to-[#C8E6C9] text-black dark:from-[#E8F5E8]/20 dark:to-[#C8E6C9]/20 dark:text-black border border-[#E8F5E8]/50 dark:border-[#E8F5E8]/30"
                            : project.status === "Live"
                            ? "bg-gradient-to-r from-[#C8E6C9] to-[#A5D6A7] text-black dark:from-[#C8E6C9]/20 dark:to-[#A5D6A7]/20 dark:text-black border border-[#C8E6C9]/50 dark:border-[#C8E6C9]/30"
                            : project.status === "Experimental"
                            ? "bg-gradient-to-r from-[#F3E5F5] to-[#E1BEE7] text-black dark:from-[#F3E5F5]/20 dark:to-[#E1BEE7]/20 dark:text-black border border-[#F3E5F5]/50 dark:border-[#F3E5F5]/30"
                            : project.status === "Discontinued"
                            ? "bg-gradient-to-r from-[#FFEBEE] to-[#FFCDD2] text-black dark:from-[#FFEBEE]/20 dark:to-[#FFCDD2]/20 dark:text-black border border-[#FFEBEE]/50 dark:border-[#FFEBEE]/30"
                            : "bg-gradient-to-r from-red-100 to-pink-100 text-black dark:from-red-500/20 dark:to-pink-500/20 dark:text-black border border-red-200 dark:border-red-500/30"
                        }`}
                        whileHover={{ scale: 1.05, y: -1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.status}
                      </motion.span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 ml-4">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gradient-to-r hover:from-muted/80 hover:to-muted/60 rounded-lg transition-all duration-300 border border-transparent hover:border-border/50 backdrop-blur-sm"
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
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </motion.a>
                      )}

                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gradient-to-r hover:from-muted/80 hover:to-muted/60 rounded-lg transition-all duration-300 border border-transparent hover:border-border/50 backdrop-blur-sm"
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
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed font-mono group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="text-xs px-3 py-1.5 bg-gradient-to-r from-muted/80 to-muted/60 text-foreground/90 rounded-lg border border-border/50 backdrop-blur-sm group-hover:from-muted group-hover:to-muted/80 group-hover:border-border transition-all duration-300 font-mono"
                        whileHover={{ scale: 1.05, y: -1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Labs Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              href="/all-labs"
              className="group inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 font-mono text-sm border border-dashed rounded-xl px-8 py-4 hover:border-foreground/50 hover:bg-gradient-to-r hover:from-background/80 hover:to-background/60 backdrop-blur-sm hover:shadow-lg hover:shadow-foreground/5"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative">
                View All Lab Projects
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-foreground/50 to-foreground/30 group-hover:w-full transition-all duration-300" />
              </span>
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Socials & Resume */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold font-mono mb-2">Find me here</h2>
        {/* <p className="mb-4 font-mono">
          I enjoy posting about my experiences in software development
        </p> */}
        <div className="grid gap-4">
          <div className="flex flex-wrap gap-4 border border-dashed rounded p-4 justify-center">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-base flex items-center gap-2 hover:underline"
              >
                {s.name}
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 3h7v7m0-7L10 14m-7 7h7v-7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Motto */}
      <footer className="mt-16 pt-8 border-t border-dashed text-center  font-serif text-lg text-muted-foreground min-h-[32px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={mottoIdx}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0.0, 0.2, 1],
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="inline-block"
          >
            <span className="relative">
              {MOTTO_LIST[mottoIdx]}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-foreground/30 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              />
            </span>
          </motion.div>
        </AnimatePresence>
      </footer>
    </div>
  );
}
