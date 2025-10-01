'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

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
            <svg
              width="1758"
              height="144"
              viewBox="0 0 1758 144"
              className="hidden h-full w-full md:block"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* S */}
              <motion.path 
                d="M24.2 144C19.8 144 15.7333 142.933 12 140.8C8.4 138.667 5.53333 135.8 3.4 132.2C1.26666 128.467 0.199997 124.4 0.199997 120V114.4H16.4V120C16.4 122.133 17.1333 124 18.6 125.6C20.2 127.067 22.0667 127.8 24.2 127.8H120.2C122.333 127.8 124.133 127.067 125.6 125.6C127.2 124 128 122.133 128 120V87.8C128 85.6667 127.2 83.8667 125.6 82.4C124.133 80.9333 122.333 80.2 120.2 80.2H24.2C19.8 80.2 15.7333 79.1333 12 77C8.4 74.7333 5.53333 71.8 3.4 68.2C1.26666 64.6 0.199997 60.6 0.199997 56.2V24C0.199997 19.6 1.26666 15.6 3.4 12C5.53333 8.26666 8.4 5.33332 12 3.19999C15.7333 1.06666 19.8 -7.62939e-06 24.2 -7.62939e-06H120.2C124.6 -7.62939e-06 128.6 1.06666 132.2 3.19999C135.933 5.33332 138.867 8.26666 141 12C143.133 15.6 144.2 19.6 144.2 24V29.6H128V24C128 21.8667 127.2 20.0667 125.6 18.6C124.133 17 122.333 16.2 120.2 16.2H24.2C22.0667 16.2 20.2 17 18.6 18.6C17.1333 20.0667 16.4 21.8667 16.4 24V56.2C16.4 58.3333 17.1333 60.1333 18.6 61.6C20.2 63.0667 22.0667 63.8 24.2 63.8H120.2C124.6 63.8 128.6 64.9333 132.2 67.2C135.933 69.3333 138.867 72.2 141 75.8C143.133 79.4 144.2 83.4 144.2 87.8V120C144.2 124.4 143.133 128.467 141 132.2C138.867 135.8 135.933 138.667 132.2 140.8C128.6 142.933 124.6 144 120.2 144H24.2Z"
                fill="currentColor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              {/* H */}
              <motion.path 
                d="M165.853 144V-7.62939e-06H182.053V63.8H297.053V-7.62939e-06H313.453V144H297.053V80.2H182.053V144H165.853Z"
                fill="currentColor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              {/* A */}
              <motion.path 
                d="M336.17 144V24C336.17 19.6 337.237 15.6 339.37 12C341.504 8.26666 344.37 5.33332 347.97 3.19999C351.704 1.06666 355.77 -7.62939e-06 360.17 -7.62939e-06H456.17C460.57 -7.62939e-06 464.57 1.06666 468.17 3.19999C471.904 5.33332 474.837 8.26666 476.97 12C479.104 15.6 480.17 19.6 480.17 24V144H463.97V91.4H352.37V144H336.17ZM352.37 75.2H463.97V24C463.97 21.8667 463.17 20.0667 461.57 18.6C460.104 17 458.304 16.2 456.17 16.2H360.17C358.037 16.2 356.17 17 354.57 18.6C353.104 20.0667 352.37 21.8667 352.37 24V75.2Z"
                fill="currentColor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              {/* R */}
              <motion.path 
                d="M624.558 144L577.558 88H598.758L645.958 143.8V144H624.558ZM502.958 144V0.19999H622.958C627.358 0.19999 631.358 1.33332 634.958 3.59999C638.691 5.73332 641.624 8.59999 643.758 12.2C645.891 15.8 646.958 19.8 646.958 24.2V66.4C646.958 70.8 645.891 74.8 643.758 78.4C641.624 82 638.691 84.9333 634.958 87.2C631.358 89.3333 627.358 90.4 622.958 90.4H519.158V144H502.958ZM526.958 74H622.958C625.091 74 626.891 73.2667 628.358 71.8C629.958 70.3333 630.758 68.5333 630.758 66.4V24.2C630.758 22.0667 629.958 20.2667 628.358 18.8C626.891 17.2 625.091 16.4 622.958 16.4H526.958C524.824 16.4 522.958 17.2 521.358 18.8C519.891 20.2667 519.158 22.0667 519.158 24.2V66.4C519.158 68.5333 519.891 70.3333 521.358 71.8C522.958 73.2667 524.824 74 526.958 74Z"
                fill="currentColor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              {/* I */}
              <motion.path 
                d="M669.997 144V-7.62939e-06H686.397V144H669.997Z"
                fill="currentColor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
              {/* F */}
              <motion.path 
                d="M711.17 144V-7.62939e-06H842.57V16.2H727.37V63.8H819.97V80.2H727.37V144H711.17Z"
                fill="currentColor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
              {/* P */}
              <motion.path 
                d="M909.794 144V0.19999H1029.79C1034.19 0.19999 1038.19 1.33332 1041.79 3.59999C1045.53 5.73332 1048.46 8.59999 1050.59 12.2C1052.73 15.8 1053.79 19.8 1053.79 24.2V66.4C1053.79 70.8 1052.73 74.8 1050.59 78.4C1048.46 82 1045.53 84.9333 1041.79 87.2C1038.19 89.3333 1034.19 90.4 1029.79 90.4H925.994V144H909.794ZM933.794 74H1029.79C1031.93 74 1033.73 73.2667 1035.19 71.8C1036.79 70.3333 1037.59 68.5333 1037.59 66.4V24.2C1037.59 22.0667 1036.79 20.2667 1035.19 18.8C1033.73 17.2 1031.93 16.4 1029.79 16.4H933.794C931.66 16.4 929.794 17.2 928.194 18.8C926.727 20.2667 925.994 22.0667 925.994 24.2V66.4C925.994 68.5333 926.727 70.3333 928.194 71.8C929.794 73.2667 931.66 74 933.794 74Z"
                fill="currentColor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              />
              {/* A */}
              <motion.path 
                d="M1070.35 144V24C1070.35 19.6 1071.42 15.6 1073.55 12C1075.68 8.26666 1078.55 5.33332 1082.15 3.19999C1085.88 1.06666 1089.95 -7.62939e-06 1094.35 -7.62939e-06H1190.35C1194.75 -7.62939e-06 1198.75 1.06666 1202.35 3.19999C1206.08 5.33332 1209.02 8.26666 1211.15 12C1213.28 15.6 1214.35 19.6 1214.35 24V144H1198.15V91.4H1086.55V144H1070.35ZM1086.55 75.2H1198.15V24C1198.15 21.8667 1197.35 20.0667 1195.75 18.6C1194.28 17 1192.48 16.2 1190.35 16.2H1094.35C1092.22 16.2 1090.35 17 1088.75 18.6C1087.28 20.0667 1086.55 21.8667 1086.55 24V75.2Z"
                fill="currentColor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              />
              {/* R */}
              <motion.path 
                d="M1358.74 144L1311.74 88H1332.94L1380.14 143.8V144H1358.74ZM1237.14 144V0.19999H1357.14C1361.54 0.19999 1365.54 1.33332 1369.14 3.59999C1372.87 5.73332 1375.8 8.59999 1377.94 12.2C1380.07 15.8 1381.14 19.8 1381.14 24.2V66.4C1381.14 70.8 1380.07 74.8 1377.94 78.4C1375.8 82 1372.87 84.9333 1369.14 87.2C1365.54 89.3333 1361.54 90.4 1357.14 90.4H1253.34V144H1237.14ZM1261.14 74H1357.14C1359.27 74 1361.07 73.2667 1362.54 71.8C1364.14 70.3333 1364.94 68.5333 1364.94 66.4V24.2C1364.94 22.0667 1364.14 20.2667 1362.54 18.8C1361.07 17.2 1359.27 16.4 1357.14 16.4H1261.14C1259 16.4 1257.14 17.2 1255.54 18.8C1254.07 20.2667 1253.34 22.0667 1253.34 24.2V66.4C1253.34 68.5333 1254.07 70.3333 1255.54 71.8C1257.14 73.2667 1259 74 1261.14 74Z"
                fill="currentColor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              />
              {/* I */}
              <motion.path 
                d="M1404.18 144V-7.62939e-06H1420.58V144H1404.18Z"
                fill="currentColor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              />
              {/* S */}
              <motion.path 
                d="M1467.95 144C1463.55 144 1459.48 142.933 1455.75 140.8C1452.15 138.667 1449.28 135.8 1447.15 132.2C1445.02 128.467 1443.95 124.4 1443.95 120V114.4H1460.15V120C1460.15 122.133 1460.88 124 1462.35 125.6C1463.95 127.067 1465.82 127.8 1467.95 127.8H1563.95C1566.08 127.8 1567.88 127.067 1569.35 125.6C1570.95 124 1571.75 122.133 1571.75 120V87.8C1571.75 85.6667 1570.95 83.8667 1569.35 82.4C1567.88 80.9333 1566.08 80.2 1563.95 80.2H1467.95C1463.55 80.2 1459.48 79.1333 1455.75 77C1452.15 74.7333 1449.28 71.8 1447.15 68.2C1445.02 64.6 1443.95 60.6 1443.95 56.2V24C1443.95 19.6 1445.02 15.6 1447.15 12C1449.28 8.26666 1452.15 5.33332 1455.75 3.19999C1459.48 1.06666 1463.55 -7.62939e-06 1467.95 -7.62939e-06H1563.95C1568.35 -7.62939e-06 1572.35 1.06666 1575.95 3.19999C1579.68 5.33332 1582.62 8.26666 1584.75 12C1586.88 15.6 1587.95 19.6 1587.95 24V29.6H1571.75V24C1571.75 21.8667 1570.95 20.0667 1569.35 18.6C1567.88 17 1566.08 16.2 1563.95 16.2H1467.95C1465.82 16.2 1463.95 17 1462.35 18.6C1460.88 20.0667 1460.15 21.8667 1460.15 24V56.2C1460.15 58.3333 1460.88 60.1333 1462.35 61.6C1463.95 63.0667 1465.82 63.8 1467.95 63.8H1563.95C1568.35 63.8 1572.35 64.9333 1575.95 67.2C1579.68 69.3333 1582.62 72.2 1584.75 75.8C1586.88 79.4 1587.95 83.4 1587.95 87.8V120C1587.95 124.4 1586.88 128.467 1584.75 132.2C1582.62 135.8 1579.68 138.667 1575.95 140.8C1572.35 142.933 1568.35 144 1563.95 144H1467.95Z"
                fill="currentColor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              />
              {/* I */}
              <motion.path 
                d="M1609.6 144V-7.62939e-06H1625.8V144H1609.6Z"
                fill="currentColor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              />
              {/* H */}
              <motion.path 
                d="M1609.6 144V-7.62939e-06H1625.8V63.8H1740.8V-7.62939e-06H1757.2V144H1740.8V80.2H1625.8V144H1609.6Z"
                fill="currentColor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              />
            </svg>

            {/* Mobile Name with Letter Animation */}
            <span className="flex flex-col text-[length:var(--text-heading-display)] font-semibold uppercase leading-[80%] tracking-[var(--tracking-heading)] text-[var(--color-secondary-400)] md:hidden">
              <div className="overflow-hidden">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {['S', 'H', 'A', 'R', 'I', 'F'].map((letter, i) => (
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
                  {['P', 'A', 'R', 'I', 'S', 'H'].map((letter, i) => (
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
                    <WordReveal text="Software engineer seeking opportunities to craft exceptional digital products. Specialized in building scalable, user-focused applications with modern web technologies." />
                  </div>

                  {/* Contact Button */}
                  {/* <div className="overflow-clip">
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
                  </div> */}
                </div>
              </div>
            </div>

            {/* Center Column - Image */}
            <div className="col-span-4 flex flex-col items-start md:items-center">
              <div className="flex h-fit w-fit flex-col items-center justify-center gap-y-[var(--space-2xs)] overflow-hidden rounded-md">
                <motion.div
                  className="pointer-events-none h-[15vh] max-w-lg rounded-lg md:h-[50vh] relative overflow-hidden"
                  initial={{ clipPath: 'inset(100%)', opacity: 0, scale: 0.95 }}
                  animate={{ clipPath: 'inset(0%)', opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <Image
                    alt="Sharif Parish - Software Engineer"
                    width={1536}
                    height={2040}
                    src="https://res.cloudinary.com/dnocsf5bq/image/upload/g_auto/v1/1_phf5ng?_a=BAVAZGE70"
                    className="h-full w-full object-cover object-center grayscale"
                    priority
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  OCT&apos;25
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