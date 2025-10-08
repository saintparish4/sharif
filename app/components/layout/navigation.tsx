'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState } from 'react';

const navItems = [
  { name: 'PHILOSOPHY', href: '/#Philosophy' },
  { name: 'WORKS', href: '/#Works' },
  { name: 'ABOUT', href: '/#About' },
  { name: 'CONTACT', href: '/#Contact' },
];

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(
    scrollY,
    [0, 200],
    [1, 0]
  );
  const y = useTransform(
    scrollY,
    [0, 200],
    [0, -50]
  );

  const handleNavClick = (href: string) => {
    // Convert href like "/#Services" to CSS selector "#Services"
    const selector = href.replace('/#', '#');
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        className="absolute top-0 z-40 w-full"
        style={{
          opacity,
          y,
        }}
      >
        <div className="section-padding-x mt-[var(--space-md)] flex flex-row items-start justify-between gap-x-[var(--gap-fluid)] lg:grid lg:grid-cols-12 lg:items-center">
          {/* Left side - Brand text */}
          <div className="col-span-8 flex flex-col items-start gap-x-[var(--space-2xl)] gap-y-[var(--space-3xs)] lg:flex-row lg:items-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="block w-fit leading-snug text-[var(--color-secondary-100)] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl chathura-extrabold whitespace-nowrap"
            >
<<<<<<< HEAD
              <div className="transition-all duration-500 ease-in transform opacity-100">
                SOFTWARE ENGINEER &amp; DESIGNER
=======
              {/* TODO: Add a logo here */}
              <div className="transition-all duration-500 ease-in transform opacity-100"> 
                Web Developer &amp; Designer
>>>>>>> 1b18c1dc3b99bf9ce650650a315d45dedb768197
              </div>
            </motion.span>
          </div>

          {/* Right side - Navigation */}
          <nav className="col-span-4 flex justify-end text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <ul className="m-0 flex flex-col items-start text-[var(--color-secondary-100)] gap-y-[var(--space-3xs)] md:flex-row md:items-center md:gap-x-[var(--space-2xs)] md:gap-y-0">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="transition-all duration-500 ease-in transform opacity-100"
                >
                  <li className="flex leading-normal md:leading-snug">
                    <a
                      className="group relative block h-fit overflow-hidden cursor-pointer select-none chathura-extrabold"
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                    >
                      <span className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                        {item.name}
                      </span>
                      <span 
                        aria-hidden="true" 
                        className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0"
                      >
                        {item.name}
                      </span>
                    </a>
                  </li>
                </motion.div>
              ))}
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu button */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 right-4 z-50 md:hidden p-[var(--space-3xs)]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <motion.div 
            className="w-full h-[2px] bg-[var(--color-secondary-400)] transition-transform duration-300"
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 6 : 0
            }}
          />
          <motion.div 
            className="w-full h-[2px] bg-[var(--color-secondary-400)] transition-opacity duration-300"
            animate={{
              opacity: isMobileMenuOpen ? 0 : 1
            }}
          />
          <motion.div 
            className="w-full h-[2px] bg-[var(--color-secondary-400)] transition-transform duration-300"
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -6 : 0
            }}
          />
        </div>
      </motion.button>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-[99999] md:hidden"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-[var(--color-secondary-400)]/90 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col justify-center items-center space-y-[var(--space-lg)]">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0, 
                y: isMobileMenuOpen ? 0 : 20 
              }}
              transition={{ duration: 0.4, delay: isMobileMenuOpen ? index * 0.1 : 0 }}
              onClick={() => handleNavClick(item.href)}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[var(--color-secondary-50)] hover:text-[var(--color-accent-200)] transition-colors chathura-extrabold"
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
};