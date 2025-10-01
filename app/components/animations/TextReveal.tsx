// components/animations/TextReveal.tsx
'use client';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

interface TextRevealProps {
  text: string;
  delay?: number;
  delayPerChar?: number;
  className?: string;
}

export const TextReveal = ({ 
  text, 
  delay = 0, 
  delayPerChar = 0.05, 
  className = "" 
}: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <span ref={ref} className="block overflow-hidden">
      <motion.span
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.4,
              delay: delay + index * delayPerChar,
              ease: "easeOut"
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
};