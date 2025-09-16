'use client';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useScrollTrigger } from '../../../hooks/useScrollTrigger';
import { TextReveal } from '../animations/TextReveal';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactRef = useScrollTrigger('#contact', {
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0, duration: 1.2 }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: '✉️',
      title: 'Email',
      value: 'hello@sharifparish.com',
      href: 'mailto:hello@sharifparish.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/sharifparish',
      href: 'https://linkedin.com/in/sharifparish'
    },
    {
      icon: '⚡',
      title: 'GitHub',
      value: 'github.com/saintparish4',
      href: 'https://github.com/saintparish4'
    }
  ];

  return (
    <section id="contact" ref={contactRef} className="min-h-screen section-padding bg-[var(--color-accent-200)]">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-[var(--space-2xl)] text-center"
          >
            <h2 className="section-heading text-[var(--color-secondary-400)] mb-[var(--space-xs)]">
              <TextReveal text="Let's Work Together" delay={0.2} />
            </h2>
            <div className="w-[var(--space-lg)] h-[2px] bg-[var(--color-secondary-400)] mx-auto mb-[var(--space-md)]"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-[length:var(--text-base-large)] text-[var(--color-secondary-100)] max-w-[40ch] mx-auto leading-base"
            >
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </motion.p>
          </motion.div>

          <div className="custom-grid gap-y-[var(--space-xl)]">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-6"
            >
              <form onSubmit={handleSubmit} className="space-y-[var(--space-sm)]">
                <div>
                  <label htmlFor="name" className="block text-[length:var(--text-base-small)] font-[500] text-[var(--color-secondary-300)] mb-[var(--space-3xs)]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-[var(--space-xs)] py-[var(--space-2xs)] border-[1.5px] border-[var(--color-accent-500)] bg-[var(--color-accent-200)] rounded-xl focus:ring-2 focus:ring-[var(--color-accent-600)] focus:border-[var(--color-accent-600)] transition-all text-[var(--color-secondary-400)] placeholder:text-[var(--color-secondary-100)]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[length:var(--text-base-small)] font-[500] text-[var(--color-secondary-300)] mb-[var(--space-3xs)]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-[var(--space-xs)] py-[var(--space-2xs)] border-[1.5px] border-[var(--color-accent-500)] bg-[var(--color-accent-200)] rounded-xl focus:ring-2 focus:ring-[var(--color-accent-600)] focus:border-[var(--color-accent-600)] transition-all text-[var(--color-secondary-400)] placeholder:text-[var(--color-secondary-100)]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[length:var(--text-base-small)] font-[500] text-[var(--color-secondary-300)] mb-[var(--space-3xs)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-[var(--space-xs)] py-[var(--space-2xs)] border-[1.5px] border-[var(--color-accent-500)] bg-[var(--color-accent-200)] rounded-xl focus:ring-2 focus:ring-[var(--color-accent-600)] focus:border-[var(--color-accent-600)] transition-all resize-none text-[var(--color-secondary-400)] placeholder:text-[var(--color-secondary-100)]"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-[var(--color-secondary-400)] text-[var(--color-secondary-50)] py-[var(--space-xs)] rounded-xl font-[600] hover:bg-[var(--color-secondary-300)] transition-colors custom-cursor-area text-[length:var(--text-base)]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-6 space-y-[var(--space-md)]"
            >
              <div>
                <h3 className="text-[length:var(--text-heading-3)] font-[600] mb-[var(--space-sm)] text-[var(--color-secondary-400)]">
                  Get In Touch
                </h3>
                <p className="text-[var(--color-secondary-100)] leading-base mb-[var(--space-md)] text-[length:var(--text-base)]">
                  I'm always interested in hearing about new opportunities and 
                  exciting projects. Whether you have a question or just want to 
                  say hi, I'll do my best to get back to you!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-[var(--space-sm)]">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-[var(--space-xs)] p-[var(--space-xs)] bg-[var(--color-accent-400)] rounded-xl hover:bg-[var(--color-accent-500)] transition-colors group custom-cursor-area border border-[var(--color-accent-500)]"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-[length:var(--text-heading-4)]">{method.icon}</div>
                    <div>
                      <div className="font-[600] text-[var(--color-secondary-400)] text-[length:var(--text-base)]">
                        {method.title}
                      </div>
                      <div className="text-[var(--color-secondary-100)] group-hover:text-[var(--color-secondary-300)] transition-colors text-[length:var(--text-base-small)]">
                        {method.value}
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-[var(--color-secondary-200)] group-hover:text-[var(--color-secondary-100)] ml-auto transition-colors"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 3h7v7m0-7L10 14" />
                    </svg>
                  </motion.a>
                ))}
              </div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="bg-[var(--color-accent-600)] p-[var(--space-sm)] rounded-xl border border-[var(--color-accent-500)]"
              >
                <div className="flex items-center gap-[var(--space-2xs)] mb-[var(--space-2xs)]">
                  <div className="w-3 h-3 bg-[var(--color-accent-400)] rounded-full animate-pulse-subtle"></div>
                  <span className="font-[600] text-[var(--color-secondary-50)] text-[length:var(--text-base)]">
                    Available for Projects
                  </span>
                </div>
                <p className="text-[var(--color-secondary-75)] text-[length:var(--text-base-small)] leading-base">
                  Currently accepting new projects for Q2 2025. Let's discuss your requirements!
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-[var(--space-2xl)] pt-[var(--space-md)] border-t border-[var(--color-accent-500)] text-center"
          >
            <p className="text-[var(--color-secondary-100)] font-montrealMono text-[length:var(--text-mono)] tracking-[var(--tracking-mono)]">
              © 2024 Sharif Parish. All rights reserved.
            </p>
          </motion.footer>
        </div>
      </div>
    </section>
  );
};