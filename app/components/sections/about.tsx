'use client';
import { motion, type Variants } from 'motion/react';
import Image from 'next/image';

// Animation variants for reusability
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const fadeInRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const fadeInScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

// Animation configuration constants
const ANIMATION_DURATION = 0.6;
const TRANSITION_EASE = [0.4, 0, 0.2, 1] as const;

// Types
interface SkillsData {
  languages: readonly string[];
  frameworks: readonly string[];
  concepts: readonly string[];
}

const skillsData: SkillsData = {
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
} as const;

// Reusable skill item component with hover animation
const SkillItem = ({ skill }: { skill: string }) => (
  <li className="flex relative items-start gap-1 sm:gap-2 text-[var(--color-secondary-50)]">
    <span className="group relative block h-fit overflow-hidden font-medium select-none text-[0.7rem] sm:text-[length:var(--text-skill)] md:text-[length:var(--text-base)]">
      <span 
        className="block w-full transition-transform duration-[400ms] translate-y-0 group-hover:-translate-y-full"
        style={{ transitionTimingFunction: `cubic-bezier(${TRANSITION_EASE.join(',')})` }}
      >
        <span className="font-mono cursor-default">{skill}</span>
      </span>
      <span 
        aria-hidden="true" 
        className="absolute top-0 left-0 w-full block transition-transform duration-[400ms] translate-y-full group-hover:translate-y-0"
        style={{ transitionTimingFunction: `cubic-bezier(${TRANSITION_EASE.join(',')})` }}
      >
        <span className="font-mono cursor-default">{skill}</span>
      </span>
    </span>
  </li>
);

// Skill category component to reduce repetition
const SkillCategory = ({ 
  title, 
  skills 
}: { 
  title: string; 
  skills: readonly string[];
}) => (
  <div className="p-0 sm:p-2 rounded-lg sm:rounded-2xl shadow-sm sm:shadow-md hover:shadow-lg transition-shadow self-start">
    <h3 className="hidden md:flex text-base lg:text-xl font-semibold mb-2 md:mb-4">{title}</h3>
    <ul className="space-y-2 sm:space-y-3 md:text-base">
      {skills.map((skill) => (
        <SkillItem key={skill} skill={skill} />
      ))}
    </ul>
  </div>
);

// Skills grid component
const SkillsGrid = ({ skills }: { skills: SkillsData }) => (
  <section 
    aria-labelledby="skills-heading"
    className="self-start px-0 py-3 sm:py-5 sm:px-3 md:px-6 bg-[var(--color-secondary-400)] text-[var(--color-accent-400)] w-full"
  >
    <div className="max-w-6xl mx-auto">
      <h2 
        id="skills-heading"
        className="text-[1.5rem] sm:text-[2rem] md:text-[length:var(--text-menu)] lg:text-[length:var(--text-h1-alt)] font-bold mb-4 sm:mb-6 md:mb-8 text-center"
      >
        Skills
      </h2>
      <div className="grid grid-cols-3 gap-0 p-0 sm:gap-1 sm:p-1 md:gap-3 lg:gap-5 md:p-5">
        <SkillCategory title="Languages & Tools" skills={skills.languages} />
        <SkillCategory title="Frameworks & Libraries" skills={skills.frameworks} />
        <SkillCategory title="Core CS Concepts" skills={skills.concepts} />
      </div>
    </div>
  </section>
);

export const About = () => {
  return (
    <section id="About" className="mt-[-2vh] z-[999999] relative">
      <article className="section-padding pb-[3em] sm:pb-[5em] md:pb-[10em] flex flex-col gap-y-[var(--space-md)] md:gap-y-[var(--space-lg)] rounded-b-3xl bg-[var(--color-secondary-400)] lg:gap-y-[var(--space-2xl)] pt-[8vh] md:pt-[15vh]">
        <header className="custom-grid">
          {/* Large Heading on LEFT */}
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            transition={{ duration: ANIMATION_DURATION }}
            viewport={{ once: true }}
            className="section-heading text-[2rem] sm:text-[2.5rem] md:text-[length:var(--text-menu)] xl:text-[length:var(--text-h1-display)] relative z-30 flex w-full flex-col col-span-full leading-none text-[var(--color-accent-400)] mix-blend-exclusion lg:col-span-6 mt-[0.5em] md:mt-[1em] mb-[0.5em] md:mb-[1em]"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              Background
            </motion.span>
          </motion.h2>

          {/* Skills Section on RIGHT - spans 6 columns starting from column 7 */}
          <motion.aside 
            initial="hidden"
            whileInView="visible"
            variants={fadeInRightVariants}
            transition={{ duration: ANIMATION_DURATION, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative z-0 col-span-full lg:col-span-6 lg:col-start-7 flex w-full items-center overflow-clip rounded-xl md:items-end"
          >
            <SkillsGrid skills={skillsData} />
          </motion.aside>
        </header>

        {/* Image and About Text Section */}
        <main className="custom-grid col-span-full gap-y-[var(--space-md)] md:gap-y-[var(--space-lg)] lg:gap-y-[var(--space-2xl)]">
          {/* Image */}
          <motion.figure 
            initial="hidden"
            whileInView="visible"
            variants={fadeInScaleVariants}
            transition={{ duration: ANIMATION_DURATION }}
            viewport={{ once: true }}
            className="relative z-0 col-span-full lg:col-span-4 w-full overflow-hidden rounded-xl"
          >
            <Image 
              alt="Growth Mindset" 
              src="/photos/growth.jpg"
              width={1536}
              height={2040}
              className="w-full h-auto object-cover object-center" 
              priority
            />
          </motion.figure>
        </main>
      </article>
    </section>
  );
};
