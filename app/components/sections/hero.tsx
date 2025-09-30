'use client';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const WordReveal = ({ text }: { text: string }) => {
  const words = text.split(' ');
  
  return (
    <div className="overflow-hidden">
      <span className="break-words">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block pr-2"
            initial={{ opacity: 0, transform: 'translateY(100%)' }}
            animate={{ opacity: 1, transform: 'none' }}
            transition={{ duration: 0.5, delay: i * 0.05 + 0.3 }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="mb-[-100svh] py-0">
      <div className="section-padding-equal sticky top-0 flex h-svh items-end">
        <div className="relative flex w-full flex-col md:gap-y-[var(--space-lg)]">
          {/* Large SVG Name for Desktop */}
          <h1 className="text-[length:var(--text-h1)] overflow-clip">
            <motion.svg
              width="1430"
              height="163"
              viewBox="0 0 1430 163"
              className="hidden h-full w-full md:block"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Z */}
              <path d="M0.169983 160V138.53L89.44 15.586V24.852H0.169983V0.669983H117.238V21.914L27.742 144.858V135.818H120.176V160H0.169983Z" fill="currentColor" />
              {/* U */}
              <path d="M200.27 162.26C177.519 162.26 160.569 156.61 149.42 145.31C138.421 133.859 132.922 116.985 132.922 94.686V0.669983H162.076V94.46C162.076 108.623 165.089 119.32 171.116 126.552C177.293 133.784 187.011 137.4 200.27 137.4C212.926 137.4 222.418 133.784 228.746 126.552C235.225 119.32 238.464 108.623 238.464 94.46V0.669983H267.166V94.686C267.166 116.985 261.516 133.859 250.216 145.31C239.067 156.61 222.418 162.26 200.27 162.26Z" fill="currentColor" />
              {/* N */}
              <path d="M289.819 160V0.669983H311.741L404.175 120.224H398.299V0.669983H425.419V160H403.497L311.289 40.446H316.939V160H289.819Z" fill="currentColor" />
              {/* E */}
              <path d="M449.123 160V0.669983H556.473V23.496H477.147V67.566H551.275V90.618H477.147V136.948H556.473V160H449.123Z" fill="currentColor" />
              {/* D */}
              <path d="M572.231 160V0.669983H630.087C648.317 0.669983 663.685 3.83398 676.191 10.162C688.847 16.3393 698.414 25.3793 704.893 37.282C711.371 49.034 714.611 63.3473 714.611 80.222C714.611 96.946 711.371 111.259 704.893 123.162C698.414 135.065 688.847 144.18 676.191 150.508C663.685 156.836 648.317 160 630.087 160H572.231ZM601.385 135.818H628.279C647.564 135.818 661.877 131.223 671.219 122.032C680.56 112.841 685.231 98.9047 685.231 80.222C685.231 61.3887 680.56 47.452 671.219 38.412C661.877 29.2213 647.564 24.626 628.279 24.626H601.385V135.818Z" fill="currentColor" />
              {/* A */}
              <path d="M766.169 160L838.263 0.669983H862.671L935.669 160H906.063L886.627 115.252L898.379 123.162H802.781L814.985 115.252L795.549 160H766.169ZM850.241 31.858L818.375 107.342L812.499 100.336H888.435L883.689 107.342L851.145 31.858H850.241Z" fill="currentColor" />
              {/* A */}
              <path d="M924.369 160L996.463 0.669983H1020.87L1093.87 160H1064.26L1044.83 115.252L1056.58 123.162H960.981L973.185 115.252L953.749 160H924.369ZM1008.44 31.858L976.575 107.342L970.699 100.336H1046.63L1041.89 107.342L1009.34 31.858H1008.44Z" fill="currentColor" />
              {/* L */}
              <path d="M1100.2 160V0.669983H1129.35V135.366H1204.38V160H1100.2Z" fill="currentColor" />
              {/* I */}
              <path d="M1215.36 160V0.669983H1244.51V160H1215.36Z" fill="currentColor" />
              {/* M */}
              <path d="M1268.51 160V0.669983H1294.05L1352.58 132.428H1345.58L1404.11 0.669983H1429.42V160H1402.98V41.802H1411.12L1357.55 160H1340.15L1286.59 41.802H1294.95V160H1268.51Z" fill="currentColor" />
            </motion.svg>

            {/* Mobile Name with Letter Animation */}
            <span className="flex flex-col text-[length:var(--text-heading-display)] font-semibold uppercase leading-[80%] tracking-[var(--tracking-heading)] text-[var(--color-secondary-400)] md:hidden">
              <div className="overflow-hidden">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {['Z', 'U', 'N', 'E', 'D'].map((letter, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      initial={{ opacity: 0, transform: 'translateY(100%)' }}
                      animate={{ opacity: 1, transform: 'translateY(0%)' }}
                      transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {['A', 'A', 'L', 'I', 'M'].map((letter, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      initial={{ opacity: 0, transform: 'translateY(100%)' }}
                      animate={{ opacity: 1, transform: 'translateY(0%)' }}
                      transition={{ duration: 0.4, delay: i * 0.1 + 0.8 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
              </div>
            </span>
          </h1>

          {/* Main Grid Content */}
          <div className="relative grid w-full grid-cols-12 justify-between gap-x-[var(--gap-fluid)] gap-y-[var(--space-md)]">
            {/* Left Column - Description and Button */}
            <div className="col-span-12 flex flex-col justify-between gap-y-[var(--space-2xl)] pt-[var(--space-sm)] md:col-span-4 md:gap-y-[var(--space-md)]">
              <div className="grid-gap flex flex-col gap-[var(--space-md)] md:gap-y-[var(--space-xl)]">
                {/* Arrow Icon */}
                <div className="hidden overflow-clip md:block">
                  <motion.span
                    className="block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="1.25"
                      viewBox="6 6 12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-0 size-4 p-0 md:size-6"
                      style={{ color: '#8C8C73' }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="7" y1="7" x2="17" y2="17" />
                      <polyline points="17 7 17 17 7 17" />
                    </svg>
                  </motion.span>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-y-[var(--space-sm)] md:gap-y-[var(--space-md)]">
                  <div className="w-full max-w-[32ch] text-balance text-[length:var(--text-base)] font-medium leading-snug text-[var(--color-secondary-100)] xl:text-[length:var(--text-base-large)] 3xl:text-[length:var(--text-heading-body)]">
                    <WordReveal text="Open to job opportunities worldwide. Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark." />
                  </div>

                  {/* Contact Button */}
                  <div className="overflow-clip">
                    <motion.div
                      initial={{ opacity: 0, transform: 'translate(0px, 20px)' }}
                      animate={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <a href="#Contact">
                        <button className="group pointer-events-auto relative flex h-fit w-fit items-center justify-center overflow-hidden rounded-full bg-[var(--color-secondary-300)] px-[var(--space-md)] sm:py-[var(--space-sm)] py-[var(--space-xs)] font-bold uppercase tracking-wide text-[#f1f0ed] sm:text-[length:var(--text-base)] text-[length:var(--text-base-small)]">
                          <span className="absolute inset-0 z-10 block overflow-hidden">
                            <span className="block h-full w-full translate-y-full rounded-t-[15rem] bg-[var(--color-accent-600)] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] sm:group-hover:translate-y-0 sm:group-hover:rounded-none" />
                          </span>
                          <span className="relative z-20 block overflow-hidden transition-all">
                            <span
                              className="block after:absolute after:left-0 after:block after:translate-y-0 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.77,0,0.175,1)] after:content-[attr(data-after)] sm:group-hover:after:-translate-y-full"
                              data-after="CONTACT ↗"
                            >
                              <span className="flex transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] sm:group-hover:-translate-y-full">
                                CONTACT ↗
                              </span>
                            </span>
                          </span>
                        </button>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column - Image */}
            <div className="col-span-4 flex flex-col items-start md:items-center">
              <div className="flex h-fit w-fit flex-col items-center justify-center gap-y-[var(--space-2xs)] overflow-hidden rounded-md">
                <motion.div
                  className="pointer-events-none h-[15vh] max-w-lg rounded-lg md:h-[50vh]"
                  initial={{ clipPath: 'inset(100%)', opacity: 0, scale: 0.95 }}
                  animate={{ clipPath: 'inset(0%)', opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <img
                    alt="Just an Image."
                    width="1536"
                    height="2040"
                    decoding="async"
                    className="h-full w-full object-cover object-center grayscale"
                    src="/test.jpg"
                  />
                </motion.div>
              </div>
            </div>

            {/* Right Column - Status */}
            <div className="end-1 col-span-8 flex w-full flex-col items-end justify-end md:col-span-4">
              <div className="overflow-clip">
                <span className="block max-w-[15ch] text-right font-mono text-[length:var(--text-base-small)] font-medium uppercase leading-snug tracking-[var(--tracking-mono)] text-[--color-secondary-100] md:max-w-max 3xl:text-[length:var(--text-base)]">
                  <WordReveal text="Available for work" />
                </span>
              </div>
              <div className="overflow-clip">
                <motion.span
                  className="block text-[length:var(--text-heading-2)] font-semibold uppercase leading-none tracking-[var(--tracking-heading)] text-[var(--color-secondary-300)] sm:text-[length:var(--text-heading-1--alt)] 3xl:text-[length:var(--text-heading-1)]"
                  initial={{ opacity: 0, transform: 'translateY(20px)' }}
                  animate={{ opacity: 1, transform: 'translateY(0px)' }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  Jun'25
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer for scroll effect */}
      <div className="h-svh" />
    </section>
  );
};