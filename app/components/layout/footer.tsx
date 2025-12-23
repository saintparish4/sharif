'use client';
import { motion } from 'motion/react';

const quickLinks = [
  { name: 'Approach', href: '/#Philosophy' },
  { name: 'Work', href: '/#Works' },
  { name: 'Background', href: '/#About' },
  { name: 'Contact', href: '/#Contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/saintparish4' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sharifparish/' },
  { name: 'X', href: 'https://x.com/yksatoshi' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const selector = href.replace('/#', '#');
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--color-secondary-400)] text-[var(--color-accent-400)]">
      <div className="section-padding py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-dashed border-[rgba(168,164,160,0.3)]">
            {/* Brand Column */}
            <div className="md:col-span-5">
              <motion.div 
                className="space-y-4 border border-dashed border-[rgba(168,164,160,0.2)] rounded-lg p-6 md:p-8"
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
                className="border border-dashed border-[rgba(168,164,160,0.2)] rounded-lg p-6 md:p-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <h4 className="font-mono text-sm font-medium text-[var(--color-secondary-50)] uppercase tracking-wider mb-4 pb-3 border-b border-dashed border-[rgba(168,164,160,0.2)]">
                  Navigation
                </h4>
                <ul className="space-y-0">
                  {quickLinks.map((link, index) => (
                    <li key={link.name} className={index > 0 ? "pt-3 mt-3 border-t border-dashed border-[rgba(168,164,160,0.2)]" : ""}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="text-base text-[var(--color-accent-500)] hover:text-[var(--color-accent-200)] transition-colors duration-200 cursor-pointer block"
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
                className="border border-dashed border-[rgba(168,164,160,0.2)] rounded-lg p-6 md:p-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <h4 className="font-mono text-sm font-medium text-[var(--color-secondary-50)] uppercase tracking-wider mb-4 pb-3 border-b border-dashed border-[rgba(168,164,160,0.2)]">
                  Connect
                </h4>
                <ul className="space-y-0">
                  {socialLinks.map((link, index) => (
                    <li key={link.name} className={index > 0 ? "pt-3 mt-3 border-t border-dashed border-[rgba(168,164,160,0.2)]" : ""}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-base text-[var(--color-accent-500)] hover:text-[var(--color-accent-200)] transition-colors duration-200 block"
                      >
                        <span>{link.name}</span>
                        <svg 
                          className="w-3.5 h-3.5 opacity-60" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
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
              className="group inline-flex items-center gap-2 font-mono text-sm text-[var(--color-secondary-50)] hover:text-[var(--color-accent-200)] transition-colors duration-200"
              aria-label="Back to top"
              suppressHydrationWarning
            >
              <span>Back to top</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
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
