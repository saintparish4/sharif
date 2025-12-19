'use client';
import { motion, useReducedMotion } from 'motion/react';
import { useState, useCallback } from 'react';

// Social links data
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/saintparish4',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sharifparish/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual API call or Typeform integration
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    
    // Reset submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  }, []);

  const animDuration = prefersReducedMotion ? 0.01 : 0.5;

  const fadeInVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: animDuration,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  };

  return (
    <section id="Contact" className="relative bg-[var(--color-accent-200)]">
      <div className="section-padding py-[var(--space-3xl)]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="section-heading text-[2.5rem] sm:text-[length:var(--text-h1-alt)] text-[var(--color-secondary-400)] mb-6">
              Let&apos;s Connect
            </h2>
            
            {/* Availability Status - matches hero */}
            <div className="flex items-center gap-3 mb-8">
              <motion.div 
                className="h-2.5 w-2.5 rounded-full bg-green-500"
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
              <span className="font-mono text-[1rem] md:text-[1.125rem] font-semibold text-[var(--color-secondary-300)]">
                Available for opportunities
              </span>
            </div>
            
            <p className="max-w-[50ch] text-[1rem] sm:text-[length:var(--text-heading-4)] font-medium leading-[1.5] text-[var(--color-secondary-100)]">
              Have a project in mind or want to discuss an opportunity? 
              I&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              viewport={{ once: true, amount: 0.2 }}
              suppressHydrationWarning
            >
              <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                {/* Name Field */}
                <div className="space-y-2">
                  <label 
                    htmlFor="name" 
                    className="block font-mono text-sm font-medium text-[var(--color-secondary-200)] uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-[var(--color-secondary-50)] focus:border-[var(--color-secondary-400)] text-[var(--color-secondary-400)] text-lg font-medium transition-colors duration-300 outline-none"
                    placeholder="Your name"
                    suppressHydrationWarning
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label 
                    htmlFor="email" 
                    className="block font-mono text-sm font-medium text-[var(--color-secondary-200)] uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-[var(--color-secondary-50)] focus:border-[var(--color-secondary-400)] text-[var(--color-secondary-400)] text-lg font-medium transition-colors duration-300 outline-none"
                    placeholder="your@email.com"
                    suppressHydrationWarning
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label 
                    htmlFor="message" 
                    className="block font-mono text-sm font-medium text-[var(--color-secondary-200)] uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    autoComplete="off"
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-[var(--color-secondary-50)] focus:border-[var(--color-secondary-400)] text-[var(--color-secondary-400)] text-lg font-medium transition-colors duration-300 outline-none resize-none"
                    placeholder="Tell me about your project..."
                    suppressHydrationWarning
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center gap-3 rounded-full bg-[var(--color-secondary-400)] px-8 py-4 text-base font-semibold text-[var(--color-accent-200)] transition-all duration-300 hover:bg-[var(--color-secondary-300)] disabled:opacity-60 disabled:cursor-not-allowed mt-4"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  suppressHydrationWarning
                >
                  {isSubmitting ? (
                    <>
                      <motion.div 
                        className="w-5 h-5 border-2 border-[var(--color-accent-200)] border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg 
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links & Additional Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col justify-between"
            >
              {/* Social Links */}
              <div className="space-y-8">
                <motion.h3 
                  variants={fadeInVariants}
                  className="font-mono text-sm font-medium text-[var(--color-secondary-200)] uppercase tracking-wider"
                >
                  Connect
                </motion.h3>
                
                <motion.div 
                  variants={staggerContainer}
                  className="flex flex-col space-y-4"
                >
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeInVariants}
                      className="group inline-flex items-center gap-4 text-[var(--color-secondary-300)] hover:text-[var(--color-secondary-400)] transition-colors duration-300"
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="p-2.5 rounded-full bg-[var(--color-accent-400)] group-hover:bg-[var(--color-accent-500)] transition-colors duration-300">
                        {social.icon}
                      </span>
                      <span className="text-lg font-medium">{social.name}</span>
                      <svg 
                        className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Direct Email CTA */}
              <motion.div 
                variants={fadeInVariants}
                className="mt-12 lg:mt-0 pt-8 border-t border-[var(--color-accent-500)]"
              >
                <p className="font-mono text-sm font-medium text-[var(--color-secondary-200)] uppercase tracking-wider mb-4">
                  Or reach out directly
                </p>
                <a 
                  href="mailto:sharifparish4@gmail.com"
                  className="group inline-flex items-center gap-2 text-xl md:text-2xl font-semibold text-[var(--color-secondary-400)] hover:text-[var(--color-secondary-200)] transition-colors duration-300"
                >
                  <span>sharifparish4@gmail.com</span>
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

