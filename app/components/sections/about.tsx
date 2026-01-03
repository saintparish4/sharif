'use client';
import { motion, type Variants, useReducedMotion } from 'motion/react';
import { useIsMobile } from '../../../hooks/useIsMobile';

// Animation configuration constants
const TRANSITION_EASE = [0.4, 0, 0.2, 1] as const;

// Types
interface Contribution {
  id: number;
  name: string;
  description: string;
  type: 'Maintainer' | 'Contributor' | 'Author';
  repo: string;
  language?: string;
}

const contributions: Contribution[] = [
  {
    id: 1,
    name: "Stealth",
    description: "Solidity security scanner detecting 7 vulnerability categories through static analysis. Parses raw contracts without compilation, includes confidence scoring for remediation prioritization.",
    type: "Author",
    repo: "https://github.com/saintparish4/stealth",
    language: "Rust"
  },
  {
    id: 2,
    name: "Cloudflare Workers Security",
    description: "Cloudflare Workers security features including rate limiting, Turnstile bot protection, WAF rules, and request tracing",
    type: "Author",
    repo: "https://github.com/saintparish4/cloudflare/tree/master/cloudflare/workers-security",
    language: "TypeScript"
  },
];

// Contribution type badge colors
const typeBadgeStyles: Record<Contribution['type'], string> = {
  Author: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Maintainer: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Contributor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
};

// Language indicator colors
const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-400',
  JavaScript: 'bg-yellow-400',
  Rust: 'bg-orange-400',
  Go: 'bg-cyan-400',
  Python: 'bg-green-400',
  Solidity: 'bg-purple-400',
  Ruby: 'bg-red-400',
};

// Contribution card component
const ContributionCard = ({ 
  contribution, 
  index,
  isMobile 
}: { 
  contribution: Contribution; 
  index: number;
  isMobile: boolean;
}) => (
  <motion.a
    href={contribution.repo}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: isMobile ? 0.2 : 0.4, 
      delay: isMobile ? 0 : index * 0.1,
      ease: TRANSITION_EASE 
    }}
    viewport={{ once: true }}
    className="group block p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-[var(--color-secondary-75)]/20 bg-[var(--color-secondary-300)]/30 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-secondary-75)]/40 hover:bg-[var(--color-secondary-300)]/50 hover:shadow-lg hover:shadow-black/5 active:scale-[0.98]"
  >
    {/* Header */}
    <div className="flex items-start justify-between gap-3 mb-3">
      <div className="flex items-center gap-2 sm:gap-3">
        {/* GitHub icon */}
        <svg 
          className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-secondary-50)] opacity-60 group-hover:opacity-100 transition-opacity" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        <h4 className="text-[0.9rem] sm:text-base md:text-lg font-semibold text-[var(--color-accent-400)] group-hover:text-[var(--color-accent-500)] transition-colors">
          {contribution.name}
        </h4>
      </div>
      {/* Type badge */}
      <span className={`shrink-0 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[0.6rem] sm:text-[0.65rem] font-medium uppercase tracking-wider rounded-full border ${typeBadgeStyles[contribution.type]}`}>
        {contribution.type}
      </span>
    </div>

    {/* Description */}
    <p className="text-[0.8rem] sm:text-[0.85rem] md:text-sm text-[var(--color-secondary-50)] leading-relaxed mb-4 line-clamp-2">
      {contribution.description}
    </p>

    {/* Footer */}
    <div className="flex items-center justify-between">
      {/* Language indicator */}
      {contribution.language && (
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${languageColors[contribution.language] || 'bg-gray-400'}`} />
          <span className="text-[0.7rem] sm:text-xs text-[var(--color-secondary-75)] font-mono">
            {contribution.language}
          </span>
        </div>
      )}
      {/* Arrow icon */}
      <svg 
        className="w-4 h-4 text-[var(--color-secondary-75)] group-hover:text-[var(--color-accent-400)] group-hover:translate-x-1 transition-all" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </motion.a>
);

// Open Source Grid component
const OpenSourceGrid = ({ isMobile }: { isMobile: boolean }) => (
  <section 
    aria-labelledby="oss-heading"
    className="self-start px-0 py-3 sm:py-5 sm:px-3 md:px-6 bg-[var(--color-secondary-400)] text-[var(--color-accent-400)] w-full"
  >
    <div className="max-w-6xl mx-auto">
      <h3 
        id="oss-heading"
        className="text-[1.25rem] sm:text-[1.5rem] md:text-[2rem] font-bold mb-4 sm:mb-6 md:mb-8 text-[var(--color-secondary-50)]"
      >
        Contributions
      </h3>
      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-5">
        {contributions.map((contribution, index) => (
          <ContributionCard 
            key={contribution.id} 
            contribution={contribution} 
            index={index}
            isMobile={isMobile}
          />
        ))}
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
              Open Source
            </span>
          </motion.h2>

          {/* Open Source Section on RIGHT - spans 6 columns starting from column 7 */}
          <motion.aside 
            initial="hidden"
            whileInView="visible"
            variants={fadeInRightVariants}
            transition={{ duration: animDuration, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="relative z-0 col-span-full lg:col-span-6 lg:col-start-7 flex w-full items-center overflow-clip rounded-xl md:items-end"
          >
            <OpenSourceGrid isMobile={isMobile} />
          </motion.aside>
        </header>
      </article>
    </section>
  );
};
