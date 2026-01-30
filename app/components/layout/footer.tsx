'use client';
import { motion } from 'motion/react';

const quickLinks = [
  { name: 'Services', href: '/#Philosophy' },
  { name: 'Work', href: '/#Works' },
  { name: 'Open Source', href: '/#OpenSource' },
  { name: 'Contact', href: '/#Contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/saintparish4' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sharifparish/' },
  { name: 'X', href: 'https://x.com/senpaiisaint' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    // Convert href like "/#Philosophy" to CSS selector "#Philosophy"
    const selector = href.replace('/#', '#');
    
    // Function to attempt scrolling
    const scrollToTarget = () => {
      const target = document.querySelector(selector) as HTMLElement;
      if (!target) {
        return false;
      }

      // Use Lenis scrollTo if available, otherwise fallback to native scrollIntoView
      const lenis = (window as any).__lenis;
      if (lenis) {
        // Calculate the exact scroll position
        const rect = target.getBoundingClientRect();
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const targetScroll = rect.top + currentScroll;
        
        // Use requestAnimationFrame to ensure Lenis is ready
        requestAnimationFrame(() => {
          lenis.scrollTo(targetScroll, {
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        });
      } else {
        // Fallback to native scroll
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return true;
    };

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      // Try immediately
      if (scrollToTarget()) {
        return;
      }

      // If element not found (might be dynamically loading), wait a bit and retry
      let retryCount = 0;
      const maxRetries = 40; // 2 seconds at 50ms intervals
      const retryInterval = setInterval(() => {
        retryCount++;
        if (scrollToTarget() || retryCount >= maxRetries) {
          clearInterval(retryInterval);
        }
      }, 50);
    }, 10);
  };

  return (
    <footer className="bg-[var(--color-secondary-400)] text-[var(--color-accent-400)] rounded-t-2xl">
      <div className="section-padding py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-dashed border-[rgba(168,164,160,0.25)]">
            {/* Brand Column */}
            <div className="md:col-span-5">
              <motion.div 
                className="space-y-4 border border-dashed border-[rgba(168,164,160,0.15)] rounded-lg p-6 md:p-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <h3 className="text-2xl md:text-3xl font-bold">Sharif Parish</h3>
                <p className="text-[var(--color-secondary-50)] text-base max-w-[35ch] leading-relaxed">
                  Software Engineer crafting digital experiences with precision and purpose.
                </p>
                
                {/* Availability Badge */}
                <div className="flex items-center gap-2 pt-2">
                  <motion.div 
                    className="h-2 w-2 rounded-full bg-green-500"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-sm text-[var(--color-secondary-50)]">
                    Available for opportunities
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 md:col-start-7">
              <motion.div
                className="border border-dashed border-[rgba(168,164,160,0.15)] rounded-lg p-6 md:p-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <h4 className="font-mono text-sm font-medium text-[var(--color-secondary-50)] uppercase tracking-wider mb-4 pb-3 border-b border-dashed border-[rgba(168,164,160,0.15)]">
                  Navigation
                </h4>
                <ul className="space-y-0" role="list">
                  {quickLinks.map((link, index) => (
                    <li key={link.name} className={index > 0 ? "pt-3 mt-3 border-t border-dashed border-[rgba(168,164,160,0.15)]" : ""}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="text-base text-[var(--color-accent-500)] hover:text-[var(--color-accent-200)] transition-colors duration-200 cursor-pointer block focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-400)] focus:ring-offset-2 focus:ring-offset-[var(--color-secondary-400)] rounded"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="md:col-span-3">
              <motion.div
                className="border border-dashed border-[rgba(168,164,160,0.15)] rounded-lg p-6 md:p-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <h4 className="font-mono text-sm font-medium text-[var(--color-secondary-50)] uppercase tracking-wider mb-4 pb-3 border-b border-dashed border-[rgba(168,164,160,0.15)]">
                  Connect
                </h4>
                <ul className="space-y-0" role="list">
                  {socialLinks.map((link, index) => (
                    <li key={link.name} className={index > 0 ? "pt-3 mt-3 border-t border-dashed border-[rgba(168,164,160,0.15)]" : ""}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-base text-[var(--color-accent-500)] hover:text-[var(--color-accent-200)] transition-colors duration-200 block focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-400)] focus:ring-offset-2 focus:ring-offset-[var(--color-secondary-400)] rounded"
                        aria-label={`Visit ${link.name} profile (opens in new tab)`}
                      >
                        <span>{link.name}</span>
                        <svg 
                          className="w-3.5 h-3.5 opacity-60" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="font-mono text-sm text-[var(--color-secondary-75)]">
              © {currentYear} Sharif Parish. All rights reserved.
            </p>
            
            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 font-mono text-sm text-[var(--color-secondary-50)] hover:text-[var(--color-accent-200)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-400)] focus:ring-offset-2 focus:ring-offset-[var(--color-secondary-400)] rounded px-2 py-1"
              aria-label="Back to top"
              type="button"
              suppressHydrationWarning
            >
              <span>Back to top</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
