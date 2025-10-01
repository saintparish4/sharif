'use client';
import { motion, type Variants } from 'motion/react';
import Image from 'next/image';
import { TextReveal } from '../animations/TextReveal';

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
const ANIMATION_DURATION = 0.8;
const TRANSITION_EASE = [0.51, 0.92, 0.24, 1.15] as const;

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
  <li className="flex relative items-start gap-2 text-[var(--color-secondary-50)]">
    <span className="group relative block h-fit overflow-hidden font-medium select-none text-[length:var(--text-skill)] sm:text-[length:var(--text-base)]">
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
  <div className="p-0 sm:p-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow self-start">
    <h3 className="hidden md:flex text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-3 md:text-base">
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
    className="self-start px-0 py-5 sm:px-3 md:px-6 bg-[var(--color-secondary-400)] text-[var(--color-accent-400)] w-full"
  >
    <div className="max-w-6xl mx-auto">
      <h2 
        id="skills-heading"
        className="text-[length:var(--text-menu)] md:text-[length:var(--text-h1-alt)] font-bold mb-8 text-center"
      >
        Skills
      </h2>
      <div className="grid grid-cols-3 gap-0 p-0 sm:gap-1 sm:p-1 md:gap-5 md:p-5">
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
      <article className="section-padding pb-[5em] sm:pb-[10em] flex flex-col gap-y-[var(--space-lg)] rounded-b-3xl bg-[var(--color-secondary-400)] lg:gap-y-[var(--space-2xl)] md:pt-[15vh]">
        <header className="custom-grid">
          {/* Large Heading on LEFT - spans columns 1-8, ends at column 7 */}
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            transition={{ duration: ANIMATION_DURATION }}
            viewport={{ once: true }}
            className="section-heading text-[length:var(--text-menu)] xl:text-[length:var(--text-h1-display)] relative z-30 flex w-full flex-col col-span-full leading-none text-[var(--color-accent-400)] mix-blend-exclusion lg:col-span-6 mt-[1em] mb-[1em]"
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

          {/* Skills Section on RIGHT - spans 6 columns starting from column 7 */}
          <motion.aside 
            initial="hidden"
            whileInView="visible"
            variants={fadeInRightVariants}
            transition={{ duration: ANIMATION_DURATION, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative z-0 col-span-full lg:col-span-6 lg:col-start-7 flex w-full items-center overflow-clip rounded-md md:items-end"
          >
            <SkillsGrid skills={skillsData} />
          </motion.aside>
        </header>

        {/* Image and About Text Section */}
        <main className="custom-grid col-span-full gap-y-[var(--space-lg)] lg:gap-y-[var(--space-2xl)]">
          {/* Image */}
          <motion.figure 
            initial="hidden"
            whileInView="visible"
            variants={fadeInScaleVariants}
            transition={{ duration: ANIMATION_DURATION }}
            viewport={{ once: true }}
            className="pointer-events-none max-h-[30rem] relative z-0 col-span-full lg:col-span-3 flex aspect-square w-full items-center overflow-clip rounded-md sm:aspect-auto md:items-end"
          >
            <Image 
              alt="Profile" 
              width={1536}
              height={2040}
              src="/test.jpg"
              className="h-full w-full object-cover object-center" 
              priority
            />
          </motion.figure>

          {/* About Text */}
          <article className="col-span-full lg:col-span-7 lg:col-start-6 flex flex-col gap-y-[var(--space-xl)] lg:gap-y-[var(--space-2xl)]">
            <motion.p 
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              transition={{ duration: ANIMATION_DURATION, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[39ch] text-balance text-[length:var(--text-heading-4)] font-medium leading-snug text-[var(--color-accent-400)]"
            >
              <TextReveal 
                text="I'm a software engineer driven by a passion for turning ideas into clean, intuitive digital experiences." 
                delay={0.2} 
              />
            </motion.p>

            <address className="flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-sm)] lg:flex-row not-italic">
              <motion.span 
                initial="hidden"
                whileInView="visible"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex h-fit overflow-clip font-mono tracking-[var(--tracking-mono)]"
                aria-label="About Me Section"
              >
                <span className="flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-50)]">
                  <TextReveal text="(About Me)" delay={0.4} />
                </span>
              </motion.span>

              <section className="flex w-full gap-y-4 max-w-[38ch] flex-col text-balance text-[length:var(--text-base)] font-medium leading-base text-[var(--color-secondary-50)]">
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <TextReveal 
                    text="I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and Tailwind CSS. My journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences." 
                    delay={0.5}
                  />
                </motion.p>
                
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <TextReveal 
                    text="Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions. I aim to contribute to impactful projects that make a difference in users' lives." 
                    delay={0.7}
                  />
                </motion.p>
              </section>
            </address>
          </article>
        </main>
      </article>
    </section>
  );
};