'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState } from 'react';

const navItems = [
  { name: 'Approach', href: '/#Philosophy' },
  { name: 'Work', href: '/#Works' },
  { name: 'Background', href: '/#About' },
];

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(
    scrollY,
    [0, 100],
    [1, 0]
  );
  const y = useTransform(
    scrollY,
    [0, 100],
    [0, -30]
  );

  const handleNavClick = (href: string) => {
    // Convert href like "/#Philosophy" to CSS selector "#Philosophy"
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
        <div className="section-padding-x mt-[var(--space-sm)] flex flex-row items-center justify-end">
          {/* Navigation - Right aligned, subtle */}
          <nav className="hidden md:flex">
            <ul className="m-0 flex flex-row items-center gap-x-[var(--space-md)] text-[var(--color-secondary-100)]">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
                >
                  <a
                    className="text-[1.125rem] lg:text-[1.25rem] font-medium hover:text-[var(--color-secondary-300)] transition-colors duration-200 cursor-pointer"
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-[var(--space-md)] right-[var(--space-md)] z-[100000] md:hidden p-2 active:scale-95 transition-transform duration-200"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
          <motion.div 
            className="w-full h-[1.5px] bg-[var(--color-secondary-400)]"
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 5 : 0
            }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          />
          <motion.div 
            className="w-full h-[1.5px] bg-[var(--color-secondary-400)]"
            animate={{
              opacity: isMobileMenuOpen ? 0 : 1
            }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
          />
          <motion.div 
            className="w-full h-[1.5px] bg-[var(--color-secondary-400)]"
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -5 : 0
            }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
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
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-[var(--color-accent-200)]" />
        <div 
          className="relative h-full flex flex-col justify-center items-center space-y-[var(--space-xl)]"
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0, 
                y: isMobileMenuOpen ? 0 : 10 
              }}
              transition={{ duration: 0.25, delay: isMobileMenuOpen ? index * 0.05 : 0, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => handleNavClick(item.href)}
              className="text-xl text-[var(--color-secondary-300)] active:text-[var(--color-secondary-400)] transition-colors duration-200 font-medium min-h-[48px] flex items-center justify-center"
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
};