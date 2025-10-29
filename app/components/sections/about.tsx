'use client';
import { motion, type Variants, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { useIsMobile } from '../../../hooks/useIsMobile';

// Animation configuration constants
const ANIMATION_DURATION = 0.6;
const ANIMATION_DURATION_MOBILE = 0.3;
const TRANSITION_EASE = [0.4, 0, 0.2, 1] as const;

// Types
interface SkillsData {
  languages: readonly string[];
  frameworks: readonly string[];
  concepts: readonly string[];
}

const skillsData: SkillsData = {
  languages: [
    'JavaScript', 'TypeScript', 'Golang', 'Python', 'Swift', 'Ruby'
  ],
  frameworks: [
    'Next.js', 'React', 'Node/Express', 'TailwindCSS', 'PostgreSQL', 'Redis', 'Ruby on Rails'
  ],
  concepts: [
    'AWS', 'GCP', 'Docker', 'Terraform', 'Datadog'
  ]
} as const;

// Reusable skill item component with hover animation (disabled on mobile)
const SkillItem = ({ skill, isMobile }: { skill: string; isMobile: boolean }) => (
  <li className="flex relative items-start gap-1 sm:gap-2 text-[var(--color-secondary-50)]">
    {isMobile ? (
      // Simplified version for mobile - no hover effects
      <span className="font-mono cursor-default text-[0.7rem] sm:text-[length:var(--text-skill)] md:text-[length:var(--text-base)]">
        {skill}
      </span>
    ) : (
      // Full hover animation for desktop
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
    )}
  </li>
);

// Skill category component to reduce repetition
const SkillCategory = ({ 
  title, 
  skills,
  isMobile
}: { 
  title: string; 
  skills: readonly string[];
  isMobile: boolean;
}) => (
  <div className="p-0 sm:p-2 rounded-lg sm:rounded-2xl shadow-sm sm:shadow-md hover:shadow-lg transition-shadow self-start">
    <h4 className="hidden md:flex text-base lg:text-xl font-semibold mb-2 md:mb-4">{title}</h4>
    <ul className="space-y-2 sm:space-y-3 md:text-base">
      {skills.map((skill) => (
        <SkillItem key={skill} skill={skill} isMobile={isMobile} />
      ))}
    </ul>
  </div>
);

// Skills grid component
const SkillsGrid = ({ skills, isMobile }: { skills: SkillsData; isMobile: boolean }) => (
  <section 
    aria-labelledby="skills-heading"
    className="self-start px-0 py-3 sm:py-5 sm:px-3 md:px-6 bg-[var(--color-secondary-400)] text-[var(--color-accent-400)] w-full"
  >
    <div className="max-w-6xl mx-auto">
      <h3 
        id="skills-heading"
        className="text-[1.5rem] sm:text-[2rem] md:text-[length:var(--text-menu)] lg:text-[length:var(--text-h1-alt)] font-bold mb-4 sm:mb-6 md:mb-8 text-center"
      >
        Skills
      </h3>
      <div className="grid grid-cols-3 gap-0 p-0 sm:gap-1 sm:p-1 md:gap-3 lg:gap-5 md:p-5">
        <SkillCategory title="Languages & Tools" skills={skills.languages} isMobile={isMobile} />
        <SkillCategory title="Frameworks & Libraries" skills={skills.frameworks} isMobile={isMobile} />
        <SkillCategory title="Cloud & Infrastructure" skills={skills.concepts} isMobile={isMobile} />
      </div>
    </div>
  </section>
);

export const About = () => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  
  // Simplified animation variants - opacity only for better performance
  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const fadeInRightVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const fadeInScaleVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const animDuration = isMobile || prefersReducedMotion ? 0.2 : 0.3;

  return (
    <section id="About" className="mt-[-2vh] z-10 relative">
      <article className="section-padding pb-[3em] sm:pb-[5em] md:pb-[10em] flex flex-col gap-y-[var(--space-md)] md:gap-y-[var(--space-lg)] rounded-b-3xl bg-[var(--color-secondary-400)] lg:gap-y-[var(--space-2xl)] pt-[8vh] md:pt-[15vh]">
        <header className="custom-grid">
          {/* Large Heading on LEFT */}
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            transition={{ duration: animDuration, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="section-heading text-[2rem] sm:text-[2.5rem] md:text-[length:var(--text-menu)] xl:text-[length:var(--text-h1-display)] relative z-30 flex w-full flex-col col-span-full leading-none text-[var(--color-accent-400)] mix-blend-exclusion lg:col-span-6 mt-[0.5em] md:mt-[1em] mb-[0.5em] md:mb-[1em]"
          >
            <span>
              Background
            </span>
          </motion.h2>

          {/* Skills Section on RIGHT - spans 6 columns starting from column 7 */}
          <motion.aside 
            initial="hidden"
            whileInView="visible"
            variants={fadeInRightVariants}
            transition={{ duration: animDuration, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="relative z-0 col-span-full lg:col-span-6 lg:col-start-7 flex w-full items-center overflow-clip rounded-xl md:items-end"
          >
            <SkillsGrid skills={skillsData} isMobile={isMobile} />
          </motion.aside>
        </header>

        {/* Image and About Text Section */}
        <main className="custom-grid col-span-full gap-y-[var(--space-md)] md:gap-y-[var(--space-lg)] lg:gap-y-[var(--space-2xl)]">
          {/* Image */}
          <motion.figure 
            initial="hidden"
            whileInView="visible"
            variants={fadeInScaleVariants}
            transition={{ duration: animDuration, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="relative z-0 col-span-full lg:col-span-4 w-full overflow-hidden rounded-xl"
          >
            <Image 
              alt="Growth Mindset" 
              src="/photos/growth.jpg"
              width={736}
              height={1104}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-auto object-cover object-center" 
              loading="lazy"
              quality={75}
            />
          </motion.figure>
        </main>
      </article>
    </section>
  );
};
