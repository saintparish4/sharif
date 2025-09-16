'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(232, 228, 227, 0)', 'rgba(232, 228, 227, 0.95)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(24px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[999999] px-[var(--space-sm)] py-[var(--space-xs)] md:px-[var(--space-lg)] md:py-[var(--space-sm)]"
        style={{
          backgroundColor,
          backdropFilter: backdropBlur,
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-[700] text-[length:var(--text-heading-4)] font-montrealMono tracking-[var(--tracking-mono)] text-[var(--color-secondary-400)]"
          >
            SP
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-x-[var(--space-md)]">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-[var(--space-2xs)] py-[var(--space-3xs)] text-[length:var(--text-base-small)] font-[500] transition-all duration-300 custom-cursor-area ${
                  activeSection === item.href.slice(1)
                    ? 'text-[var(--color-secondary-400)]'
                    : 'text-[var(--color-secondary-100)] hover:text-[var(--color-secondary-300)]'
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-secondary-400)]"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:hidden p-[var(--space-3xs)] custom-cursor-area"
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
        </div>
      </motion.nav>

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
              className="text-[length:var(--text-menu)] font-[600] text-[var(--color-secondary-50)] hover:text-[var(--color-accent-200)] transition-colors custom-cursor-area"
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
};