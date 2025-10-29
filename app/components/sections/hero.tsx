'use client';
import { motion } from 'motion/react';
import { useIsMobile } from '../../../hooks/useIsMobile';

export const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
        {/* Logo Header */}
        <div className="mb-12 md:mb-20 flex justify-center">
          <h1 className="overflow-hidden w-full flex justify-center">
            {/* Desktop SVG Logo */}
            <svg
              width="1758"
              height="144"
              viewBox="0 0 1758 144"
              className="hidden h-auto w-full max-w-[1200px] md:block mx-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* S - Simplified animation on mobile */}
              <motion.path 
                d="M24.2 144C19.8 144 15.7333 142.933 12 140.8C8.4 138.667 5.53333 135.8 3.4 132.2C1.26666 128.467 0.199997 124.4 0.199997 120V114.4H16.4V120C16.4 122.133 17.1333 124 18.6 125.6C20.2 127.067 22.0667 127.8 24.2 127.8H120.2C122.333 127.8 124.133 127.067 125.6 125.6C127.2 124 128 122.133 128 120V87.8C128 85.6667 127.2 83.8667 125.6 82.4C124.133 80.9333 122.333 80.2 120.2 80.2H24.2C19.8 80.2 15.7333 79.1333 12 77C8.4 74.7333 5.53333 71.8 3.4 68.2C1.26666 64.6 0.199997 60.6 0.199997 56.2V24C0.199997 19.6 1.26666 15.6 3.4 12C5.53333 8.26666 8.4 5.33332 12 3.19999C15.7333 1.06666 19.8 -7.62939e-06 24.2 -7.62939e-06H120.2C124.6 -7.62939e-06 128.6 1.06666 132.2 3.19999C135.933 5.33332 138.867 8.26666 141 12C143.133 15.6 144.2 19.6 144.2 24V29.6H128V24C128 21.8667 127.2 20.0667 125.6 18.6C124.133 17 122.333 16.2 120.2 16.2H24.2C22.0667 16.2 20.2 17 18.6 18.6C17.1333 20.0667 16.4 21.8667 16.4 24V56.2C16.4 58.3333 17.1333 60.1333 18.6 61.6C20.2 63.0667 22.0667 63.8 24.2 63.8H120.2C124.6 63.8 128.6 64.9333 132.2 67.2C135.933 69.3333 138.867 72.2 141 75.8C143.133 79.4 144.2 83.4 144.2 87.8V120C144.2 124.4 143.133 128.467 141 132.2C138.867 135.8 135.933 138.667 132.2 140.8C128.6 142.933 124.6 144 120.2 144H24.2Z"
                fill="currentColor"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.05 }}
              />
              {/* Remaining letters - all simplified for better mobile performance */}
              <motion.path d="M165.853 144V-7.62939e-06H182.053V63.8H297.053V-7.62939e-06H313.453V144H297.053V80.2H182.053V144H165.853Z" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.08 }} />
              <motion.path d="M336.17 144V24C336.17 19.6 337.237 15.6 339.37 12C341.504 8.26666 344.37 5.33332 347.97 3.19999C351.704 1.06666 355.77 -7.62939e-06 360.17 -7.62939e-06H456.17C460.57 -7.62939e-06 464.57 1.06666 468.17 3.19999C471.904 5.33332 474.837 8.26666 476.97 12C479.104 15.6 480.17 19.6 480.17 24V144H463.97V91.4H352.37V144H336.17ZM352.37 75.2H463.97V24C463.97 21.8667 463.17 20.0667 461.57 18.6C460.104 17 458.304 16.2 456.17 16.2H360.17C358.037 16.2 356.17 17 354.57 18.6C353.104 20.0667 352.37 21.8667 352.37 24V75.2Z" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.11 }} />
              <motion.path d="M624.558 144L577.558 88H598.758L645.958 143.8V144H624.558ZM502.958 144V0.19999H622.958C627.358 0.19999 631.358 1.33332 634.958 3.59999C638.691 5.73332 641.624 8.59999 643.758 12.2C645.891 15.8 646.958 19.8 646.958 24.2V66.4C646.958 70.8 645.891 74.8 643.758 78.4C641.624 82 638.691 84.9333 634.958 87.2C631.358 89.3333 627.358 90.4 622.958 90.4H519.158V144H502.958ZM526.958 74H622.958C625.091 74 626.891 73.2667 628.358 71.8C629.958 70.3333 630.758 68.5333 630.758 66.4V24.2C630.758 22.0667 629.958 20.2667 628.358 18.8C626.891 17.2 625.091 16.4 622.958 16.4H526.958C524.824 16.4 522.958 17.2 521.358 18.8C519.891 20.2667 519.158 22.0667 519.158 24.2V66.4C519.158 68.5333 519.891 70.3333 521.358 71.8C522.958 73.2667 524.824 74 526.958 74Z" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.14 }} />
              <motion.path d="M669.997 144V-7.62939e-06H686.397V144H669.997Z" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.17 }} />
              <motion.path d="M711.17 144V-7.62939e-06H842.57V16.2H727.37V63.8H819.97V80.2H727.37V144H711.17Z" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.20 }} />
              <motion.path d="M909.794 144V0.19999H1029.79C1034.19 0.19999 1038.19 1.33332 1041.79 3.59999C1045.53 5.73332 1048.46 8.59999 1050.59 12.2C1052.73 15.8 1053.79 19.8 1053.79 24.2V66.4C1053.79 70.8 1052.73 74.8 1050.59 78.4C1048.46 82 1045.53 84.9333 1041.79 87.2C1038.19 89.3333 1034.19 90.4 1029.79 90.4H925.994V144H909.794ZM933.794 74H1029.79C1031.93 74 1033.73 73.2667 1035.19 71.8C1036.79 70.3333 1037.59 68.5333 1037.59 66.4V24.2C1037.59 22.0667 1036.79 20.2667 1035.19 18.8C1033.73 17.2 1031.93 16.4 1029.79 16.4H933.794C931.66 16.4 929.794 17.2 928.194 18.8C926.727 20.2667 925.994 22.0667 925.994 24.2V66.4C925.994 68.5333 926.727 70.3333 928.194 71.8C929.794 73.2667 931.66 74 933.794 74Z" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.23 }} />
              <motion.path d="M1070.35 144V24C1070.35 19.6 1071.42 15.6 1073.55 12C1075.68 8.26666 1078.55 5.33332 1082.15 3.19999C1085.88 1.06666 1089.95 -7.62939e-06 1094.35 -7.62939e-06H1190.35C1194.75 -7.62939e-06 1198.75 1.06666 1202.35 3.19999C1206.08 5.33332 1209.02 8.26666 1211.15 12C1213.28 15.6 1214.35 19.6 1214.35 24V144H1198.15V91.4H1086.55V144H1070.35ZM1086.55 75.2H1198.15V24C1198.15 21.8667 1197.35 20.0667 1195.75 18.6C1194.28 17 1192.48 16.2 1190.35 16.2H1094.35C1092.22 16.2 1090.35 17 1088.75 18.6C1087.28 20.0667 1086.55 21.8667 1086.55 24V75.2Z" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.26 }} />
              <motion.path d="M1358.74 144L1311.74 88H1332.94L1380.14 143.8V144H1358.74ZM1237.14 144V0.19999H1357.14C1361.54 0.19999 1365.54 1.33332 1369.14 3.59999C1372.87 5.73332 1375.8 8.59999 1377.94 12.2C1380.07 15.8 1381.14 19.8 1381.14 24.2V66.4C1381.14 70.8 1380.07 74.8 1377.94 78.4C1375.8 82 1372.87 84.9333 1369.14 87.2C1365.54 89.3333 1361.54 90.4 1357.14 90.4H1253.34V144H1237.14ZM1261.14 74H1357.14C1359.27 74 1361.07 73.2667 1362.54 71.8C1364.14 70.3333 1364.94 68.5333 1364.94 66.4V24.2C1364.94 22.0667 1364.14 20.2667 1362.54 18.8C1361.07 17.2 1359.27 16.4 1357.14 16.4H1261.14C1259 16.4 1257.14 17.2 1255.54 18.8C1254.07 20.2667 1253.34 22.0667 1253.34 24.2V66.4C1253.34 68.5333 1254.07 70.3333 1255.54 71.8C1257.14 73.2667 1259 74 1261.14 74Z" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.29 }} />
              <motion.path d="M1404.18 144V-7.62939e-06H1420.58V144H1404.18Z" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.32 }} />
              <motion.path d="M1467.95 144C1463.55 144 1459.48 142.933 1455.75 140.8C1452.15 138.667 1449.28 135.8 1447.15 132.2C1445.02 128.467 1443.95 124.4 1443.95 120V114.4H1460.15V120C1460.15 122.133 1460.88 124 1462.35 125.6C1463.95 127.067 1465.82 127.8 1467.95 127.8H1563.95C1566.08 127.8 1567.88 127.067 1569.35 125.6C1570.95 124 1571.75 122.133 1571.75 120V87.8C1571.75 85.6667 1570.95 83.8667 1569.35 82.4C1567.88 80.9333 1566.08 80.2 1563.95 80.2H1467.95C1463.55 80.2 1459.48 79.1333 1455.75 77C1452.15 74.7333 1449.28 71.8 1447.15 68.2C1445.02 64.6 1443.95 60.6 1443.95 56.2V24C1443.95 19.6 1445.02 15.6 1447.15 12C1449.28 8.26666 1452.15 5.33332 1455.75 3.19999C1459.48 1.06666 1463.55 -7.62939e-06 1467.95 -7.62939e-06H1563.95C1568.35 -7.62939e-06 1572.35 1.06666 1575.95 3.19999C1579.68 5.33332 1582.62 8.26666 1584.75 12C1586.88 15.6 1587.95 19.6 1587.95 24V29.6H1571.75V24C1571.75 21.8667 1570.95 20.0667 1569.35 18.6C1567.88 17 1566.08 16.2 1563.95 16.2H1467.95C1465.82 16.2 1463.95 17 1462.35 18.6C1460.88 20.0667 1460.15 21.8667 1460.15 24V56.2C1460.15 58.3333 1460.88 60.1333 1462.35 61.6C1463.95 63.0667 1465.82 63.8 1467.95 63.8H1563.95C1568.35 63.8 1572.35 64.9333 1575.95 67.2C1579.68 69.3333 1582.62 72.2 1584.75 75.8C1586.88 79.4 1587.95 83.4 1587.95 87.8V120C1587.95 124.4 1586.88 128.467 1584.75 132.2C1582.62 135.8 1579.68 138.667 1575.95 140.8C1572.35 142.933 1568.35 144 1563.95 144H1467.95Z" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.35 }} />
              <motion.path d="M1609.6 144V-7.62939e-06H1625.8V144H1609.6Z" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.38 }} />
              <motion.path d="M1609.6 144V-7.62939e-06H1625.8V63.8H1740.8V-7.62939e-06H1757.2V144H1740.8V80.2H1625.8V144H1609.6Z" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.41 }} />
            </svg>

            {/* Mobile Text Logo - Simplified animation */}
            <div className="flex flex-col text-7xl font-bold uppercase leading-tight tracking-tight md:hidden items-center text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                SHARIF
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                PARISH
              </motion.div>
            </div>
          </h1>
        </div>

        {/* Content */}
        <div className="flex justify-center">
          <motion.div 
            className="max-w-3xl flex flex-col gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                Software Engineer
              </h2>
              
              <p className="text-lg leading-relaxed md:text-xl font-semibold" style={{ color: '#1a1a1a' }}>
                I focus on writing maintainable code and designing interfaces that people actually want to use. My work ranges from early-stage prototypes to production systems serving real users.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4 items-center">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="h-2 w-2 rounded-full bg-green-500"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <span className="font-mono text-[1rem] font-semibold" style={{ color: '#1a1a1a' }}>
                  Available for opportunities
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 justify-center">
              <motion.a
                href="#Works"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Work
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              
              {/* <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-neutral-900 px-8 py-4 text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-900 hover:text-white dark:border-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.a> */}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-neutral-500"
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <span className="font-mono text-xs uppercase tracking-wider">Scroll</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
