'use client';
import { motion, useReducedMotion } from 'motion/react';
import { useState, useCallback, useMemo } from 'react';

// Social links data
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/saintparish4',
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sharifparish/',
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/senpaiisaint',
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form field errors type
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Validate a single field
  const validateField = useCallback((name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!emailRegex.test(value)) return 'Please enter a valid email';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return undefined;
      default:
        return undefined;
    }
  }, []);

  // Validate all fields
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.entries(formState).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formState, validateField]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    // Clear submit error
    if (submitError) setSubmitError(null);
  }, [errors, submitError]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Validate on blur
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true });
    
    // Validate form
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTouched({});
      setErrors({});
      
      // Reset submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }, [validateForm, formState]);

  const animDuration = prefersReducedMotion ? 0.01 : 0.4;

  const fadeInVariants = useMemo(() => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: animDuration,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  }), [animDuration, prefersReducedMotion]);

  const staggerContainer = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.15
      }
    }
  }), [prefersReducedMotion]);

  // Input class generator
  const getInputClasses = (fieldName: keyof FormErrors) => {
    const hasError = touched[fieldName] && errors[fieldName];
    return `w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-transparent border ${
      hasError 
        ? 'border-red-400 focus:border-red-500' 
        : 'border-[var(--color-secondary-100)]/30 focus:border-[var(--color-secondary-400)]'
    } rounded-lg text-[var(--color-secondary-400)] text-sm sm:text-base font-medium transition-all duration-300 outline-none focus:ring-2 focus:ring-[var(--color-secondary-400)]/20 placeholder:text-[var(--color-secondary-200)]/50`;
  };

  return (
    <section 
      id="Contact" 
      className="relative bg-[var(--color-accent-200)]"
      aria-labelledby="contact-heading"
    >
      <div className="section-padding py-[var(--space-2xl)] md:py-[var(--space-3xl)]">
        <div className="max-w-5xl mx-auto">
          {/* Header - Aligned with other sections */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex w-full flex-col gap-y-[var(--space-md)] md:gap-y-[var(--space-lg)] pb-8 md:pb-12"
          >
            <h2 
              id="contact-heading"
              className="section-heading col-span-6 max-w-[18ch] text-[var(--color-secondary-400)] text-[2rem] sm:text-[2.25rem] md:text-[length:var(--text-h1-alt)]"
            >
              Let&apos;s Connect
            </h2>
            
            {/* Availability Status */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <motion.div 
                className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-green-500"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                aria-hidden="true"
              />
              <span className="font-mono text-[0.8rem] sm:text-[0.875rem] md:text-[1rem] font-medium text-[var(--color-secondary-300)]">
                Available for opportunities
              </span>
            </div>
            
            <p className="max-w-[50ch] text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[var(--color-secondary-200)]">
              Have a project in mind or want to discuss an opportunity? 
              I&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <form 
                onSubmit={handleSubmit} 
                className="space-y-5 sm:space-y-6" 
                noValidate
                suppressHydrationWarning
                aria-describedby={submitError ? 'form-error' : undefined}
              >
                {/* Name Field */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label 
                    htmlFor="name" 
                    className="block font-mono text-[0.7rem] sm:text-xs font-medium text-[var(--color-secondary-300)] uppercase tracking-wider"
                  >
                    Name <span className="text-red-400" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    autoComplete="name"
                    aria-invalid={touched.name && errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={getInputClasses('name')}
                    placeholder="Your name"
                    suppressHydrationWarning
                  />
                  {touched.name && errors.name && (
                    <p id="name-error" className="text-red-400 text-xs sm:text-sm mt-1" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label 
                    htmlFor="email" 
                    className="block font-mono text-[0.7rem] sm:text-xs font-medium text-[var(--color-secondary-300)] uppercase tracking-wider"
                  >
                    Email <span className="text-red-400" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    autoComplete="email"
                    aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={getInputClasses('email')}
                    placeholder="your@email.com"
                    suppressHydrationWarning
                  />
                  {touched.email && errors.email && (
                    <p id="email-error" className="text-red-400 text-xs sm:text-sm mt-1" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label 
                    htmlFor="message" 
                    className="block font-mono text-[0.7rem] sm:text-xs font-medium text-[var(--color-secondary-300)] uppercase tracking-wider"
                  >
                    Message <span className="text-red-400" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows={4}
                    autoComplete="off"
                    aria-invalid={touched.message && errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`${getInputClasses('message')} resize-none`}
                    placeholder="Tell me about your project..."
                    suppressHydrationWarning
                  />
                  {touched.message && errors.message && (
                    <p id="message-error" className="text-red-400 text-xs sm:text-sm mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Error */}
                {submitError && (
                  <p id="form-error" className="text-red-400 text-sm" role="alert">
                    {submitError}
                  </p>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center gap-2.5 sm:gap-3 rounded-full bg-[var(--color-secondary-400)] px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-[var(--color-accent-200)] transition-all duration-300 hover:bg-[var(--color-secondary-300)] disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  aria-busy={isSubmitting}
                  suppressHydrationWarning
                >
                  {isSubmitting ? (
                    <>
                      <motion.div 
                        className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[var(--color-accent-200)] border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        aria-hidden="true"
                      />
                      <span>Sending...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        aria-hidden="true"
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
              className="flex flex-col gap-6 sm:gap-8"
            >
              {/* Social Links */}
              <div className="space-y-4 sm:space-y-6 border border-[var(--color-secondary-100)]/20 rounded-xl p-4 sm:p-6 md:p-8 bg-[var(--color-accent-300)]/30">
                <motion.h3 
                  variants={fadeInVariants}
                  className="font-mono text-[0.7rem] sm:text-xs font-medium text-[var(--color-secondary-300)] uppercase tracking-wider"
                >
                  Connect
                </motion.h3>
                
                <motion.div 
                  variants={staggerContainer}
                  className="flex flex-col space-y-2.5 sm:space-y-3"
                  role="list"
                  aria-label="Social media links"
                >
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeInVariants}
                      className="group inline-flex items-center gap-3 sm:gap-4 text-[var(--color-secondary-300)] hover:text-[var(--color-secondary-400)] transition-all duration-300 py-1"
                      whileHover={{ x: prefersReducedMotion ? 0 : 6 }}
                      transition={{ duration: 0.2 }}
                      role="listitem"
                    >
                      <span className="p-2 sm:p-2.5 rounded-full bg-[var(--color-accent-400)] group-hover:bg-[var(--color-accent-500)] transition-colors duration-300">
                        {social.icon}
                      </span>
                      <span className="text-sm sm:text-base md:text-lg font-medium">{social.name}</span>
                      <svg 
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        aria-hidden="true"
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
                className="pt-4 sm:pt-6 border-t border-[var(--color-secondary-100)]/20"
              >
                <p className="font-mono text-[0.7rem] sm:text-xs font-medium text-[var(--color-secondary-300)] uppercase tracking-wider mb-3 sm:mb-4">
                  Or reach out directly
                </p>
                <a 
                  href="mailto:sharifparish4@gmail.com"
                  className="group inline-flex items-center gap-2 text-base sm:text-lg md:text-xl font-semibold text-[var(--color-secondary-400)] hover:text-[var(--color-secondary-200)] transition-colors duration-300 break-all sm:break-normal"
                >
                  <span>sharifparish4@gmail.com</span>
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-hidden="true"
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
