'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Approach', href: '/#Philosophy' },
  { name: 'Work', href: '/#Works' },
  { name: 'Background', href: '/#About' },
];

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  
  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Disable scroll animations on mobile for performance
  const opacity = useTransform(
    scrollY,
    [0, 100],
    isMobile ? [1, 1] : [1, 0]
  );
  const y = useTransform(
    scrollY,
    [0, 100],
    isMobile ? [0, 0] : [0, -30]
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
          willChange: isMobile ? 'auto' : 'opacity, transform',
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

      {/* Ultra Unique Mobile menu button - Morphing Circle Grid */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-[var(--space-md)] right-[var(--space-md)] z-[9999999] md:hidden p-3"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        whileTap={{ scale: 0.9 }}
        style={{ willChange: 'transform' }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ willChange: 'transform' }}>
          {/* Top Left */}
          <motion.circle
            cx="8"
            cy="8"
            r="2.5"
            fill="#080807"
            animate={{
              cx: isMobileMenuOpen ? 8 : 8,
              cy: isMobileMenuOpen ? 8 : 8,
              r: isMobileMenuOpen ? 1.5 : 2.5,
              opacity: isMobileMenuOpen ? 0.3 : 1,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: 'transform' }}
          />
          
          {/* Top Center */}
          <motion.circle
            cx="16"
            cy="8"
            r="2.5"
            fill="#080807"
            animate={{
              cx: isMobileMenuOpen ? 16 : 16,
              cy: isMobileMenuOpen ? 6 : 8,
              r: isMobileMenuOpen ? 2 : 2.5,
              opacity: isMobileMenuOpen ? 1 : 1,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: 'transform' }}
          />
          
          {/* Top Right */}
          <motion.circle
            cx="24"
            cy="8"
            r="2.5"
            fill="#080807"
            animate={{
              cx: isMobileMenuOpen ? 24 : 24,
              cy: isMobileMenuOpen ? 8 : 8,
              r: isMobileMenuOpen ? 1.5 : 2.5,
              opacity: isMobileMenuOpen ? 0.3 : 1,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: 'transform' }}
          />
          
          {/* Middle Left */}
          <motion.circle
            cx="8"
            cy="16"
            r="2.5"
            fill="#080807"
            animate={{
              cx: isMobileMenuOpen ? 6 : 8,
              cy: isMobileMenuOpen ? 16 : 16,
              r: isMobileMenuOpen ? 2 : 2.5,
              opacity: isMobileMenuOpen ? 1 : 1,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: 'transform' }}
          />
          
          {/* Center - Transforms dramatically */}
          <motion.circle
            cx="16"
            cy="16"
            r="2.5"
            fill="#080807"
            animate={{
              r: isMobileMenuOpen ? 3.5 : 2.5,
              opacity: isMobileMenuOpen ? 1 : 0.5,
              scale: isMobileMenuOpen ? 1.2 : 1,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: 'transform' }}
          />
          
          {/* Middle Right */}
          <motion.circle
            cx="24"
            cy="16"
            r="2.5"
            fill="#080807"
            animate={{
              cx: isMobileMenuOpen ? 26 : 24,
              cy: isMobileMenuOpen ? 16 : 16,
              r: isMobileMenuOpen ? 2 : 2.5,
              opacity: isMobileMenuOpen ? 1 : 1,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: 'transform' }}
          />
          
          {/* Bottom Left */}
          <motion.circle
            cx="8"
            cy="24"
            r="2.5"
            fill="#080807"
            animate={{
              cx: isMobileMenuOpen ? 8 : 8,
              cy: isMobileMenuOpen ? 24 : 24,
              r: isMobileMenuOpen ? 1.5 : 2.5,
              opacity: isMobileMenuOpen ? 0.3 : 1,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: 'transform' }}
          />
          
          {/* Bottom Center */}
          <motion.circle
            cx="16"
            cy="24"
            r="2.5"
            fill="#080807"
            animate={{
              cx: isMobileMenuOpen ? 16 : 16,
              cy: isMobileMenuOpen ? 26 : 24,
              r: isMobileMenuOpen ? 2 : 2.5,
              opacity: isMobileMenuOpen ? 1 : 1,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: 'transform' }}
          />
          
          {/* Bottom Right */}
          <motion.circle
            cx="24"
            cy="24"
            r="2.5"
            fill="#080807"
            animate={{
              cx: isMobileMenuOpen ? 24 : 24,
              cy: isMobileMenuOpen ? 24 : 24,
              r: isMobileMenuOpen ? 1.5 : 2.5,
              opacity: isMobileMenuOpen ? 0.3 : 1,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: 'transform' }}
          />
        </svg>
      </motion.button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 999999,
            backgroundColor: '#e8e8e8',
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2.5rem',
          }}>
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavClick(item.href);
                }}
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#080807',
                  textTransform: 'uppercase',
                  padding: '1rem 2rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'opacity 0.2s',
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.opacity = '0.6';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};